import { useState, useEffect } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";

import "./ModalVideo.scss"




export default function ModalVideo({
  videoKey, videPlatform, isOpen, close
}) {
  let [urlVideo, set_urlVideo] = useState(null)

  // Dar de alta una nueva URL si se da el caso
  useEffect(function() {
    if(videPlatform == "YouTube") {
      set_urlVideo(`https://youtu.be/${videoKey}`)
      
    }
    else if(videPlatform == "Vimeo") {
      set_urlVideo(`https://vimeo.com/${videoKey}`)
    }
  }, [videoKey, videPlatform])

  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close}
      footer={false}
    >
      <ReactPlayer 
        url={urlVideo}
        controls
      />
      
    </Modal>
  )
}