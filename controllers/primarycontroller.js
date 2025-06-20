const Image = require('../models/model')

const images = async (req, res) => {
    try {
        const images = await Image.find({}, 'imageUrl likeCount location');
        res.json(images);
    } catch (err) {
        console.error('Error fetching images:', err);
        res.status(500).json({ error: 'Failed to fetch images' });
    }

}

const liked = async (req, res) => {
    const { imageId } = req.body;

    if (!imageId) {
        return res.status(400).json({ error: 'imageId is required' });
    }

    try {
        const updated = await Image.findByIdAndUpdate(
            imageId,
            { $inc: { likeCount: 1 } },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ error: 'Image not found' });
        }

        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update like count' });
    }
}

module.exports = { images, liked }