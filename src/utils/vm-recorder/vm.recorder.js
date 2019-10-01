import RecordRTC from 'recordrtc';



class VMRecorder{


    /**
     * create a recorder
     * @param {*} canvas canvas from p5
     * @param {*} width width of canvas
     * @param {*} height height of canvas
     * @param {*} filename default filename of recorded file
     */
    constructor(canvas, width, height, filename='test'){

        this.recordedFilename = filename;
        this.recorder = RecordRTC(canvas.elt.captureStream(),
         { 
            type:'video',
            // mimeType:'video',//output video as webm
            disableLogs: false, 
            frameInterval:30, //frame per second
            videoBitsPerSecond: 12800000, //higher bit result in better quality
            canvas: {
                width: width,
                height: height
            }
         });
         console.log(this.recorder);
    }

    /**
     * start recording
     */
    start = ()=>{
        this.recorder.startRecording();
    }

    /**
     * pause recording
     */
    pause = ()=>{
        this.recorder.pauseRecording();
    }

    /**
     * resume recording
     */
    resume = ()=>{
        this.recorder.resumeRecording();
    }

    /**
     * stop recording
     * @param {*} callback function take recorded file as argument.
     */
    stop = (callback)=>{
        
        this.recorder.stopRecording(()=>{
            let blob = this.recorder.getBlob();

            if(callback)
                callback(blob);
        })
    }

    /**
     * prompt window to ask user to save recorded file
     */
    saveRecordedFile = ()=>{
        
        this.recorder.save(this.recordedFilename);

    }

    /**
     * reset recorder clear all data
     */
    reset = ()=>{
        this.recorder.clearRecordedData();
    }
}

export default VMRecorder;