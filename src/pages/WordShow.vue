<template>
    <div class="wordshow">
        <div v-show="!showSummary">
          <WordCard v-show="!showDetails"/>
          <DetailsCard v-show="showDetails"/>
        </div>
        <BriefSummary v-show="showSummary"/>
    </div>
</template>

<script>

import { mapState } from 'vuex'

import DetailsCard from '../components/DetailsCard.vue';
import WordCard from '../components/WordCard.vue';
import BriefSummary from '../components/BriefSummary.vue';

export default {
  name: 'WordPart',
  components:{
    DetailsCard,
    WordCard,
    BriefSummary
  },
  computed: mapState(['showDetails','showSummary']),
}
</script>
<style>
</style>