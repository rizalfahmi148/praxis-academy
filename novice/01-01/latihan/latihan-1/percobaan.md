# Mempelajari JavaSript

-Javascript adalah salah satu bahasa pemrograman yang dipakai untuk situs web. hal yang harus dipelajari sebelum terjun menjadi seorang frontend engineer. Karena nantinya, mau membuat aplikasi apapun kalau urusan bagian depan (tampilan) pasti akan berurusan dengan javascript. Baik itu React, Node, Angular, Express, maupun yang lainnya, semuanya berupa javascript. Jadi, jika dasarnya saja tidak paham, dalamnya juga tidak akan paham .bahasa pemrograman yang berbasis client-side, yang artinya seluruh proses yang terjadi pada sebuah halaman akan diproses oleh klien,jadi server hanya memproses HTTP-request-nya saja.
-contoh kode program javascript :
<button id="tombol">klik</button>
<script>
  var tombol = document.getElementById("tombol");
  tombol.addEventListener("click", function()
  {
    alert("Belajar Memahami Apa itu Javascript. Javascript adalah sebuah bahasa pemrograman");
  });
</script>
-contoh kode program javascript lebih singkat
<script>
  function contoh()
  {
    alert("Belajar Memahami Apa itu Javascript. Javascript adalah sebuah bahasa pemrograman");
  }
</script>
<button onclick="contoh()">klik</button>
