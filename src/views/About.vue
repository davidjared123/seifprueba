<template>
  <editor />
</template>

<script>
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
 
import { Editor } from '@toast-ui/vue-editor';

export default {
components: {
    editor: Editor
  }
}
</script>

<style>

</style>