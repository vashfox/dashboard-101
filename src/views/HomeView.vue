<template>
  <div class="flex flex-col w-full">
    <div class="font-bold text-2xl">Posts</div>
    <Loading v-if="isLoading"></Loading>
    <div v-else class="p-4">
      <Table :headers="headers" :data="posts">
        <template #title="{ item }">
          <td @click="showDetails(item)" class="border-b p-4 pl-8 cursor-pointer hover:underline text-blue-500">
            {{ item.title }}
          </td>
        </template>
        <template #body="{ item }">
          <td class="border-b p-4 pl-8">
            <!-- {{ item.body }} -->
            <SeeMoreText :text="item.body" />
          </td>
        </template>
      </Table>
    </div>
    <Modal v-model="showModal">
      <Loading v-if="isDetailsLoading"></Loading>
      <div v-if="!isDetailsLoading">
        <PostHeader :post="postSelected.post" :user="postSelected.user"></PostHeader>
        <Comments :comments="postSelected.comments"></Comments>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios"
import Modal from "@/components/Modal.vue";
import Button from "@/components/Button.vue";
import Loading from "@/components/Loading.vue";
import Table from "@/components/Table.vue";
import PostHeader from "@/components/PostHeader.vue";
import Comments from "@/components/Comments.vue";
import SeeMoreText from "@/components/SeeMoreText2.vue";

const posts = ref();
const showModal = ref(false);
const isLoading = ref(false);
const isDetailsLoading = ref(false);
const postSelected = ref();
const headers = [
  {
    text: "Title",
    value: "title",
  }, {
    text: "Body",
    value: "body",
  }
]

onMounted(async () => {
  init()
})

const init = async () => {
  isLoading.value = true;

  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
  posts.value = data

  isLoading.value = false;
}

const showDetails = async (post) => {
  showModal.value = true;

  isDetailsLoading.value = true;

  const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
  const { data: comments } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
  postSelected.value = { post, user, comments };

  isDetailsLoading.value = false;
}
</script>
