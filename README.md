# mugen

## Development Process (OUTDATED)

1.  come up with idea

    -   music generation based on mood

2.  research possible ways to implement the idea

    -   from background knowledge we knew about tensorflow.js and TensorFlow Magenta

3.  download the music of various artists and categorize them into general moods

    -   KIL and ZOTiYAC
    -   classical music

4.  [convert the MP3s to MIDI files](https://www.bearaudiotool.com/mp3-to-midi)

    -   you will lose lyrics (so the model will only be able to generate music with instrumentals)

5.  [convert MIDI files to NoteSequences](https://github.com/tensorflow/magenta/blob/master/magenta/scripts/README.md)

6.  [convert NoteSequences to SequenceExamples](https://github.com/tensorflow/magenta/tree/master/magenta/models/melody_rnn#create-sequenceexamples)

7.  [train the MelodyRNN on the data](https://github.com/tensorflow/magenta/tree/master/magenta/models/melody_rnn#train-and-evaluate-the-model)

## Installing

If you want to run Mugen on your local computer:

1.  clone the repository

2.  `npm i -g angular-cli-ghpages`

3.  `cd` into the repository

4.  

```bash
cat > .git/hooks/commit-msg << EOF
#!/bin/sh
message=$(cat $1)
cd mugen/
npm i
ng build --prod --base-href "https://o-wth.github.io/mugen/"
npx ngh --message "$message" --dir=dist/mugen
EOF
```

5.  `cd mugen`

6.  `ng serve`
