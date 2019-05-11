# mugen

## Development Process

1.  come up with idea

    -   music generation based on mood

2.  research possible ways to implement the idea

    -   from background knowledge we knew about tensorflow.js and TensorFlow Magenta

3.  collect data
4.  download the music of various artists and categorize them into general moods
    -   KIL and ZOTiYAC
    -   [INSERT MORE ARTISTS/GENRES]
5.  [convert the MP3s to MIDI files](https://www.bearaudiotool.com/mp3-to-midi)
    -   you will lose lyrics (so the model will only be able to generate music with instrumentals)
6.  [convert MIDI files to NoteSequences](https://github.com/tensorflow/magenta/blob/master/magenta/scripts/README.md)
7.  [convert NoteSequences to SequenceExamples](https://github.com/tensorflow/magenta/tree/master/magenta/models/melody_rnn#create-sequenceexamples)
8.  [train the model](https://github.com/tensorflow/magenta/tree/master/magenta/models/melody_rnn#train-and-evaluate-the-model) [NOT COMPLETED YET]
