package com.reactnative_kotlin_bridge.KotlinVideoStreaming

import android.media.MediaPlayer
import android.net.Uri
import android.os.Build
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.MediaController
import com.reactnative_kotlin_bridge.R
import kotlinx.android.synthetic.main.activity_video_streaming.*

class VideoStreamingActivity : AppCompatActivity(), MediaPlayer.OnPreparedListener, MediaPlayer.OnInfoListener {

    private var playback = 0
    private lateinit var title: String
    private lateinit var videoUrl: String
    private lateinit var mediaController: MediaController

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_video_streaming)

        //get the passed video info
        title = intent.getStringExtra("videoTitle")
        videoUrl = intent.getStringExtra("videoUrl")

        mediaController = MediaController(this)
        videoTitle.text = title
        videoView.setOnPreparedListener(this)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            videoView.setOnInfoListener(this)
        }
    }

    override fun onPrepared(p0: MediaPlayer?) {
        //add control buttons to videoView
        mediaController.setAnchorView(playerContainer)
        videoView.setMediaController(mediaController)

        //start the video
        videoView.seekTo(playback)
        videoView.start()
    }

    override fun onInfo(player: MediaPlayer?, what: Int, extra: Int): Boolean {
        if (what == MediaPlayer.MEDIA_INFO_VIDEO_RENDERING_START)
            progressBar.visibility = View.GONE
        return true
    }

    override fun onStart() {
        super.onStart()
        val uri = Uri.parse(videoUrl)
        videoView.setVideoURI(uri)
        progressBar.visibility = View.VISIBLE
    }

    override fun onPause() {
        super.onPause()
        videoView.pause()
        playback = videoView.currentPosition
    }

    override fun onStop() {
        videoView.stopPlayback()
        super.onStop()
    }

}
