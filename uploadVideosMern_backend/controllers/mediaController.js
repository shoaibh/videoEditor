const editVideo = require("./edit");

// Backendurl/public/videos/file_name.mp4

exports.create = async (req, res) => {
  const { name } = req.body;
  let videosPaths = [];

  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let video of req.files.videos) {
      await editVideo.editVideo(video.path);
      videosPaths.push("/public/videos/output.mp4");
    }
  }

  try {
    res.json({ message: "Media created successfully", videosPaths });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
