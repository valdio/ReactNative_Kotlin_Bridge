package com.reactnative_kotlin_bridge.KotlinVideoStreaming

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

/**
 * Created by Valdio Veliu on 18/01/2018.
 */


class StreamManager(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "KotlinVideoStream"
    }

    @ReactMethod
    fun playVideoStream(videoTitle: String, videoUrl: String) {
        val intent = Intent(reactApplicationContext, VideoStreamingActivity::class.java)
        intent.putExtra("videoTitle", videoTitle)
        intent.putExtra("videoUrl", videoUrl)
        reactApplicationContext.startActivity(intent)
    }

}