# jquery.drag


Kullanım : 
<div class="myThingToDrag">
  <div class="myHandle"></div>
</div>


$('div').drags({
    handle: ".myHandle",
    onMoved: function(){
      //do something cool
    },
	onDrop: function(){
      //do something cool
    }
  });