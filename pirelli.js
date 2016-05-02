(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 24,
	color: "#333333",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Camada1 = function() {
	this.spriteSheet = ss["pirelli_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Camada1_1 = function() {
	this.spriteSheet = ss["pirelli_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Camada1copiar = function() {
	this.spriteSheet = ss["pirelli_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Curvas1 = function() {
	this.spriteSheet = ss["pirelli_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.finalfinal = function() {
	this.spriteSheet = ss["pirelli_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.UMANOVAESTRADAPARAASUAAVENTURA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Txt
	this.text = new cjs.Text("UMA NOVA ESTRADA PARA A SUA AVENTURA.", "bold 11px 'Gotham Bold'", "#FFFFFF");
	this.text.lineHeight = 11;
	this.text.lineWidth = 262;
	this.text.setTransform(11.1,12.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Sombra
	this.text_1 = new cjs.Text("UMA NOVA ESTRADA PARA A SUA AVENTURA.", "bold 11px 'Gotham Bold'", "#FFFFFF");
	this.text_1.lineHeight = 11;
	this.text_1.lineWidth = 262;
	this.text_1.setTransform(11.1,12.9);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,16);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-2.1,304,64);


(lib.slogan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-3.9,115,7.9);


(lib.Rodas_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Curvas1();
	this.instance.setTransform(-235,-343.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235,-343.9,472,684);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E11021").s().p("AAUBYIgbg4IgcAAIAAA4IhhAAIAAivIDMAAQAZAAASASQARASAAAZQABATgMANQgLAQgRAGIAoA8gAgjgEIApAAQAKAAAGgGQAGgHABgJQAAgJgHgHQgGgHgJAAIgqAAg");
	this.shape.setTransform(-15.4,4.7,0.594,0.594);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E11021").s().p("AhtBYIAAivIDUAAIAAAmIhzAAIAAAfIBwAAIAAAlIhwAAIAAAfIB7AAIAAAmg");
	this.shape_1.setTransform(2.5,4.7,0.594,0.594);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E11021").s().p("AhfBYIAAivIBeAAIAACJIBgAAIAAAmg");
	this.shape_2.setTransform(18.5,4.7,0.594,0.594);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E11021").s().p("AhfBYIAAivIBfAAIAACJIBgAAIAAAmg");
	this.shape_3.setTransform(32,4.7,0.594,0.594);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E11021").s().p("AgwBYIAAivIBhAAIAACvg");
	this.shape_4.setTransform(42.7,4.7,0.594,0.594);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E11021").s().p("AgwBYIAAivIBhAAIAACvg");
	this.shape_5.setTransform(-30.4,4.7,0.594,0.594);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E11021").s().p("AsdCoIAAlPIX9AAQAaAAASATQASASABAZQgBAagSASQgSASgZAAI1UAAIAADTgApzhVISQAAQAJAAAHgFQAGgGAAgJQAAgIgGgGQgHgGgJAAIyQAAg");
	this.shape_6.setTransform(0.1,0,0.594,0.594);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFDD00").s().p("Ao+CoIAAlPIR8AAIAAFPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-16.9,115,33.8);


(lib.Title_tm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAIIAAgNIgGANIAAAAIgFgNIAAAAIAAANIgCAAIAAgPIADAAIAEAMIAFgMIADAAIAAAPg");
	this.shape.setTransform(0.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAIIAAgNIgFAAIAAgCIALAAIAAACIgGAAIAAANg");
	this.shape_1.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-0.8,3.5,1.7);


(lib.Title_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvAjIgDgBQgDgCAAgDQgBgCACgDIAXgiQACgDgEgDIgCAAIgaAAIgDgBQgEgDADgEIAEgHQACgDAEAAIBxAAIADABQAEADgCAEIgFAGQgBAEgFAAIgfAAQgJABgEAGIgXAlQgFAHgHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-3.5,13.2,7.1);


(lib.Title_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8AjIgFgCQgFgDgBgGQgCgFADgGQABgCADAAIAjgBQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABQgBAEAEABQAEADAGAAQAMACAIgFQAAgBAAAAQABAAAAgBQAAAAAAAAQgBgBAAAAIgBgBIgzgQQgDgCgBgEQgBgEACgEIAFgJQAIgIAKgBIBbAAIAFABQAIAFgFAIIgCAEQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIglABQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgDgCgCQgQgEgLAHQgBABAAAAQgBAAAAAAQAAABABAAQAAABAAAAIACABIAvAPIACAAQAEADABAEQABAEgCADIgEAHQgHALgMABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-3.5,14.7,7.1);


(lib.Title_RR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANAjQgJAAgEgJIgCgMQgCgDgEAAIgIAAQgHAAgEAGIgHALQgEAHgIAAIgWAAIgEgBQgCgCgBgDQgBgCACgDIAigzQAEgHAIAAIBPAAQAJAAALAFQADACACADQABADgCADQgGAMgMAFQgKACgJABQgBAAAAABQAAAAgBAAQAAABAAAAQAAAAAAABIABABQAHAEABAHIAFANQAAAFgFAAgAgEgQIgFAGQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAIACABIATAAQAJgBAHgHQABAAABAAQAAgBAAAAQAAgBAAAAQAAgBgBgBIgBgBIgJgCIgUAAQgCAAgCAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-3.5,15.4,7.1);


(lib.Title_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAjQgKAAgDgJIgDgMQgCgDgDAAIgJAAQgHAAgEAGIgHALQgEAHgIAAIgWAAIgEgBQgCgCgBgDQAAgCABgDIAjgzQAEgHAHAAIBPAAQAJAAALAFQADACACADQABADgCADQgFAMgNAFQgKACgJABQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAGAEADAHIAEALIAAACQAAAFgFAAgAgEgQIgEAGQgBABAAAAQAAABAAABQAAAAAAAAQABABAAAAIACABIATAAQAIgBAJgHQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBgBgBIgBgBIgJgCIgUAAQgCAAgCAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-3.5,15.3,7.1);


(lib.Title_p = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAAjIgEgBQgCgCgBgDQAAgCABgDIAjgzQAEgHAHAAIBKAAQAJABAJAFIAAAAQAEAEAAAEQAAAFgDADQgJAMgPADQgQAGgVAAIgQAAQgJAAgFAHIgIAMQgDAHgIAAgAAAgQIgEAGQgCADADADIADAAIAIAAQAHgBADgBQAFgCAEgDQACgCgBgDIgCgBQgFgCgGAAIgLAAQgEAAAAADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-3.5,14.5,7.1);


(lib.Title_OO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFAjIgFgCQgFgDgBgFQgCgGADgFIAYgnQAJgKANABIBpAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAIAEgEAIIgbArQgGAKgMACgAgWgMIgMAVQgDAIAHADIAEABIAdAAQAJAAAFgIIANgUQACgDgBgDQgBgEgDgBIgCgBIghAAQgJAAgFAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-3.5,16.4,7.1);


(lib.Title_o = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEAjIgFgCQgFgDgCgFQgBgGADgFIAYgnQAJgKANABIBoAAQADAAACACQADACABADQABAEgCADIgaArQgGAKgMACgAgVgMIgMAVQgCADABAEQABADAEABIADABIAdAAQAKAAAEgIIAOgUQABgDgBgDQgBgEgCgBIgCgBIgiAAQgIAAgFAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-3.5,16.4,7.1);


(lib.Title_n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAjQgEAAgCgDIgKgTQgCgCgEgBIgHAAQgIAAgEAHIgIALQgEAHgIAAIgUAAIgDgBQgCgCgBgDQAAgCABgDIAkg1QAEgFAGAAIAZAAQAIAAABAGIAJAOQADAFAGAAIAGAAQAIAAAEgGIAKgQQABgDAFAAIAXAAIAEABQAFAEgDAGIgjAzQgEAHgIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-3.5,16.5,7.1);


(lib.Title_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAjIgEgBQgCgCgBgDQgBgCACgDIAigzQAEgHAIAAIAVAAQADABACADQACACgBADIgWAkQgDAEAEACIAAAAIAxAAIADABQAEADgCAEIgFAHQgBADgFAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-3.5,11,7.1);


(lib.Title_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAjIgDgBQgEgDACgEIAlg4QADgFAHAAIAVAAIAEABQADACABADQAAADgCACIgiAzQgDAHgHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.5,7.9,7.1);


(lib.Title_i_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAjIgCgBQgEgCACgFIAlg4QADgFAGAAIAWAAIAEABQAGAEgEAGIgiAzQgDAHgHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.5,7.9,7.1);


(lib.title_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAiQgLAAgLgFQgGgDgDgGQgEgGADgHIAEgHQAIgKAMgIQAOgIARgEQARgEARAAQAPAAAPADQAJABAGAGIAEAFIAAACQAAAEgEABIgdADIgDAAIgFgFQgEgEgGAAQgVgCgQAQQgFAEgDAGQgDAFADAEQADADAGABQAMABAHgCQAIgCAJgGQAEgEAHABIATADIACABQAAABABAAQAAABgBABQAAAAAAAAQAAABgBAAQgLAKgQAEQgRAGgQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-3.5,14.2,7.1);


(lib.Title_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcAjQAAAAgBAAQgBgBAAAAQAAAAgBgBQAAgBAAAAIABgGQAAAAAAgBQgBgBAAAAQAAAAgBgBQAAAAgBAAIgoAAQgDAAgCACIgKAIQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIgZAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgEgEAFgDIBPg5QAEgDAEAAIAjAAQAGAAABAHIAFA2IAAABQAAAHgHAAgAAPgFIgMAIQgBAAAAABQAAABAAAAQAAAAAAABQAAAAAAABIADABIASAAQADAAABgEIABgIQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgFAAQgDAAgCACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-3.5,13.9,7.1);


(lib.Title_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAjQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIADgCQADgBABgCIAbg3QAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAIAnAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQgDABgBACIgbA3QAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-3.5,7.6,7.1);


(lib.Title_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAjIAAgCIACgCQAEgBACgCIAag3QAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBgBAAIAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAmAAIABACIgDACQgCABgDACIgaA3QAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIABAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.5,7.6,7.1);


(lib.Fumaça = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.737)").s().p("AjLR6QhJhJgwhUQiTBLiyAAQkrAAjUjTQjTjTABkrQgBkqDTjRQBJhJBSgvQhZiegBjCQAAkqDUjUQDTjTEqAAQErAADRDTQB0B0A1COQCbhYDAAAQErAADTDUQDTDTAAErQAAEojTDTQhSBShfAzQAsB0gBCHQABEqjUDTQjTDUkqAAQkrAAjSjUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.2,-135.8,274.4,271.7);


(lib.BigFundo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Fundo 1
	this.instance = new lib.Camada1copiar();
	this.instance.setTransform(-168,-140);

	this.instance_1 = new lib.Camada1();
	this.instance_1.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Fundo 2
	this.instance_2 = new lib.Camada1_1();
	this.instance_2.setTransform(-168,-195.4);

	this.instance_3 = new lib.finalfinal();
	this.instance_3.setTransform(-168,-325.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-325.4,336,465.4);


(lib.Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Stop at This Frame
		The Flash timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		stop();
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Layer 4
	this.instance = new lib.Title_11();
	this.instance.setTransform(78.2,0.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:79.1,alpha:0.071},0).wait(1).to({x:80,alpha:0.143},0).wait(1).to({x:80.9,alpha:0.214},0).wait(1).to({x:81.9,alpha:0.286},0).wait(1).to({x:82.8,alpha:0.357},0).wait(1).to({x:83.7,alpha:0.429},0).wait(1).to({x:84.6,alpha:0.5},0).wait(1).to({x:85.5,alpha:0.571},0).wait(1).to({x:86.4,alpha:0.643},0).wait(1).to({x:87.3,alpha:0.714},0).wait(1).to({x:88.3,alpha:0.786},0).wait(1).to({x:89.2,alpha:0.857},0).wait(1).to({x:90.1,alpha:0.929},0).wait(1).to({x:91,alpha:1},0).wait(15));

	// Layer 5
	this.instance_1 = new lib.Title_1();
	this.instance_1.setTransform(73.1,0.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({x:74,alpha:0.071},0).wait(1).to({x:74.9,alpha:0.143},0).wait(1).to({x:75.8,alpha:0.214},0).wait(1).to({x:76.8,alpha:0.286},0).wait(1).to({x:77.7,alpha:0.357},0).wait(1).to({x:78.6,alpha:0.429},0).wait(1).to({x:79.5,alpha:0.5},0).wait(1).to({x:80.4,alpha:0.571},0).wait(1).to({x:81.3,alpha:0.643},0).wait(1).to({x:82.2,alpha:0.714},0).wait(1).to({x:83.2,alpha:0.786},0).wait(1).to({x:84.1,alpha:0.857},0).wait(1).to({x:85,alpha:0.929},0).wait(1).to({x:85.9,alpha:1},0).wait(14));

	// Layer 6
	this.instance_2 = new lib.Title_l();
	this.instance_2.setTransform(56.8,0.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({x:57.7,alpha:0.071},0).wait(1).to({x:58.6,alpha:0.143},0).wait(1).to({x:59.5,alpha:0.214},0).wait(1).to({x:60.4,alpha:0.286},0).wait(1).to({x:61.3,alpha:0.357},0).wait(1).to({x:62.2,alpha:0.429},0).wait(1).to({x:63.2,alpha:0.5},0).wait(1).to({x:64.1,alpha:0.571},0).wait(1).to({x:65,alpha:0.643},0).wait(1).to({x:65.9,alpha:0.714},0).wait(1).to({x:66.8,alpha:0.786},0).wait(1).to({x:67.7,alpha:0.857},0).wait(1).to({x:68.6,alpha:0.929},0).wait(1).to({x:69.6,alpha:1},0).wait(13));

	// Layer 7
	this.instance_3 = new lib.Title_i();
	this.instance_3.setTransform(49,0.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1).to({x:49.9,alpha:0.071},0).wait(1).to({x:50.8,alpha:0.143},0).wait(1).to({x:51.7,alpha:0.214},0).wait(1).to({x:52.7,alpha:0.286},0).wait(1).to({x:53.6,alpha:0.357},0).wait(1).to({x:54.5,alpha:0.429},0).wait(1).to({x:55.4,alpha:0.5},0).wait(1).to({x:56.3,alpha:0.571},0).wait(1).to({x:57.2,alpha:0.643},0).wait(1).to({x:58.1,alpha:0.714},0).wait(1).to({x:59.1,alpha:0.786},0).wait(1).to({x:60,alpha:0.857},0).wait(1).to({x:60.9,alpha:0.929},0).wait(1).to({x:61.8,alpha:1},0).wait(12));

	// Layer 8
	this.instance_4 = new lib.Title_a();
	this.instance_4.setTransform(36,0.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1).to({x:36.9,alpha:0.071},0).wait(1).to({x:37.8,alpha:0.143},0).wait(1).to({x:38.7,alpha:0.214},0).wait(1).to({x:39.7,alpha:0.286},0).wait(1).to({x:40.6,alpha:0.357},0).wait(1).to({x:41.5,alpha:0.429},0).wait(1).to({x:42.4,alpha:0.5},0).wait(1).to({x:43.3,alpha:0.571},0).wait(1).to({x:44.2,alpha:0.643},0).wait(1).to({x:45.1,alpha:0.714},0).wait(1).to({x:46.1,alpha:0.786},0).wait(1).to({x:47,alpha:0.857},0).wait(1).to({x:47.9,alpha:0.929},0).wait(1).to({x:48.8,alpha:1},0).wait(11));

	// Layer 9
	this.instance_5 = new lib.Title_RR();
	this.instance_5.setTransform(21.6,0.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).wait(1).to({x:22.5,alpha:0.071},0).wait(1).to({x:23.4,alpha:0.143},0).wait(1).to({x:24.3,alpha:0.214},0).wait(1).to({x:25.3,alpha:0.286},0).wait(1).to({x:26.2,alpha:0.357},0).wait(1).to({x:27.1,alpha:0.429},0).wait(1).to({x:28,alpha:0.5},0).wait(1).to({x:28.9,alpha:0.571},0).wait(1).to({x:29.8,alpha:0.643},0).wait(1).to({x:30.7,alpha:0.714},0).wait(1).to({x:31.7,alpha:0.786},0).wait(1).to({x:32.6,alpha:0.857},0).wait(1).to({x:33.5,alpha:0.929},0).wait(1).to({x:34.4,alpha:1},0).wait(10));

	// Layer 10
	this.instance_6 = new lib.Title_t();
	this.instance_6.setTransform(9.3,0.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).wait(1).to({x:10.2,alpha:0.071},0).wait(1).to({x:11.1,alpha:0.143},0).wait(1).to({x:12,alpha:0.214},0).wait(1).to({x:12.9,alpha:0.286},0).wait(1).to({x:13.8,alpha:0.357},0).wait(1).to({x:14.7,alpha:0.429},0).wait(1).to({x:15.7,alpha:0.5},0).wait(1).to({x:16.6,alpha:0.571},0).wait(1).to({x:17.5,alpha:0.643},0).wait(1).to({x:18.4,alpha:0.714},0).wait(1).to({x:19.3,alpha:0.786},0).wait(1).to({x:20.2,alpha:0.857},0).wait(1).to({x:21.1,alpha:0.929},0).wait(1).to({x:22.1,alpha:1},0).wait(9));

	// Layer 11
	this.instance_7 = new lib.Title_n();
	this.instance_7.setTransform(-12.5,0.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).wait(1).to({x:-11.6,alpha:0.071},0).wait(1).to({x:-10.7,alpha:0.143},0).wait(1).to({x:-9.8,alpha:0.214},0).wait(1).to({x:-8.8,alpha:0.286},0).wait(1).to({x:-7.9,alpha:0.357},0).wait(1).to({x:-7,alpha:0.429},0).wait(1).to({x:-6.1,alpha:0.5},0).wait(1).to({x:-5.2,alpha:0.571},0).wait(1).to({x:-4.3,alpha:0.643},0).wait(1).to({x:-3.4,alpha:0.714},0).wait(1).to({x:-2.4,alpha:0.786},0).wait(1).to({x:-1.5,alpha:0.857},0).wait(1).to({x:-0.6,alpha:0.929},0).wait(1).to({x:0.3,alpha:1},0).wait(8));

	// TM
	this.instance_8 = new lib.Title_tm();
	this.instance_8.setTransform(-2,-2.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).wait(1).to({x:-1.1,alpha:0.071},0).wait(1).to({x:-0.2,alpha:0.143},0).wait(1).to({x:0.7,alpha:0.214},0).wait(1).to({x:1.7,alpha:0.286},0).wait(1).to({x:2.6,alpha:0.357},0).wait(1).to({x:3.5,alpha:0.429},0).wait(1).to({x:4.4,alpha:0.5},0).wait(1).to({x:5.3,alpha:0.571},0).wait(1).to({x:6.2,alpha:0.643},0).wait(1).to({x:7.1,alpha:0.714},0).wait(1).to({x:8.1,alpha:0.786},0).wait(1).to({x:9,alpha:0.857},0).wait(1).to({x:9.9,alpha:0.929},0).wait(1).to({x:10.8,alpha:1},0).wait(7));

	// Layer 12
	this.instance_9 = new lib.Title_OO();
	this.instance_9.setTransform(-27.7,0.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).wait(1).to({x:-26.8,alpha:0.071},0).wait(1).to({x:-25.9,alpha:0.143},0).wait(1).to({x:-25,alpha:0.214},0).wait(1).to({x:-24.1,alpha:0.286},0).wait(1).to({x:-23.2,alpha:0.357},0).wait(1).to({x:-22.3,alpha:0.429},0).wait(1).to({x:-21.3,alpha:0.5},0).wait(1).to({x:-20.4,alpha:0.571},0).wait(1).to({x:-19.5,alpha:0.643},0).wait(1).to({x:-18.6,alpha:0.714},0).wait(1).to({x:-17.7,alpha:0.786},0).wait(1).to({x:-16.8,alpha:0.857},0).wait(1).to({x:-15.9,alpha:0.929},0).wait(1).to({x:-14.9,alpha:1},0).wait(6));

	// Layer 13
	this.instance_10 = new lib.Title_i_1();
	this.instance_10.setTransform(-38.6,0.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).wait(1).to({x:-37.7,alpha:0.071},0).wait(1).to({x:-36.8,alpha:0.143},0).wait(1).to({x:-35.9,alpha:0.214},0).wait(1).to({x:-34.9,alpha:0.286},0).wait(1).to({x:-34,alpha:0.357},0).wait(1).to({x:-33.1,alpha:0.429},0).wait(1).to({x:-32.2,alpha:0.5},0).wait(1).to({x:-31.3,alpha:0.571},0).wait(1).to({x:-30.4,alpha:0.643},0).wait(1).to({x:-29.5,alpha:0.714},0).wait(1).to({x:-28.5,alpha:0.786},0).wait(1).to({x:-27.6,alpha:0.857},0).wait(1).to({x:-26.7,alpha:0.929},0).wait(1).to({x:-25.8,alpha:1},0).wait(5));

	// Layer 14
	this.instance_11 = new lib.Title_p();
	this.instance_11.setTransform(-48.4,0.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({_off:false},0).wait(1).to({x:-47.5,alpha:0.071},0).wait(1).to({x:-46.6,alpha:0.143},0).wait(1).to({x:-45.7,alpha:0.214},0).wait(1).to({x:-44.8,alpha:0.286},0).wait(1).to({x:-43.9,alpha:0.357},0).wait(1).to({x:-43,alpha:0.429},0).wait(1).to({x:-42,alpha:0.5},0).wait(1).to({x:-41.1,alpha:0.571},0).wait(1).to({x:-40.2,alpha:0.643},0).wait(1).to({x:-39.3,alpha:0.714},0).wait(1).to({x:-38.4,alpha:0.786},0).wait(1).to({x:-37.5,alpha:0.857},0).wait(1).to({x:-36.6,alpha:0.929},0).wait(1).to({x:-35.6,alpha:1},0).wait(4));

	// Layer 15
	this.instance_12 = new lib.Title_r();
	this.instance_12.setTransform(-62.8,0.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12).to({_off:false},0).wait(1).to({x:-61.9,alpha:0.071},0).wait(1).to({x:-61,alpha:0.143},0).wait(1).to({x:-60.1,alpha:0.214},0).wait(1).to({x:-59.1,alpha:0.286},0).wait(1).to({x:-58.2,alpha:0.357},0).wait(1).to({x:-57.3,alpha:0.429},0).wait(1).to({x:-56.4,alpha:0.5},0).wait(1).to({x:-55.5,alpha:0.571},0).wait(1).to({x:-54.6,alpha:0.643},0).wait(1).to({x:-53.7,alpha:0.714},0).wait(1).to({x:-52.7,alpha:0.786},0).wait(1).to({x:-51.8,alpha:0.857},0).wait(1).to({x:-50.9,alpha:0.929},0).wait(1).to({x:-50,alpha:1},0).wait(3));

	// Layer 16
	this.instance_13 = new lib.Title_o();
	this.instance_13.setTransform(-77.4,0.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({_off:false},0).wait(1).to({x:-76.5,alpha:0.071},0).wait(1).to({x:-75.6,alpha:0.143},0).wait(1).to({x:-74.7,alpha:0.214},0).wait(1).to({x:-73.8,alpha:0.286},0).wait(1).to({x:-72.9,alpha:0.357},0).wait(1).to({x:-72,alpha:0.429},0).wait(1).to({x:-71,alpha:0.5},0).wait(1).to({x:-70.1,alpha:0.571},0).wait(1).to({x:-69.2,alpha:0.643},0).wait(1).to({x:-68.3,alpha:0.714},0).wait(1).to({x:-67.4,alpha:0.786},0).wait(1).to({x:-66.5,alpha:0.857},0).wait(1).to({x:-65.6,alpha:0.929},0).wait(1).to({x:-64.6,alpha:1},0).wait(2));

	// Layer 17
	this.instance_14 = new lib.title_c();
	this.instance_14.setTransform(-92.2,0.4);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(14).to({_off:false},0).wait(1).to({x:-91.3,alpha:0.071},0).wait(1).to({x:-90.4,alpha:0.143},0).wait(1).to({x:-89.5,alpha:0.214},0).wait(1).to({x:-88.5,alpha:0.286},0).wait(1).to({x:-87.6,alpha:0.357},0).wait(1).to({x:-86.7,alpha:0.429},0).wait(1).to({x:-85.8,alpha:0.5},0).wait(1).to({x:-84.9,alpha:0.571},0).wait(1).to({x:-84,alpha:0.643},0).wait(1).to({x:-83.1,alpha:0.714},0).wait(1).to({x:-82.1,alpha:0.786},0).wait(1).to({x:-81.2,alpha:0.857},0).wait(1).to({x:-80.3,alpha:0.929},0).wait(1).to({x:-79.4,alpha:1},0).wait(1));

	// Layer 18
	this.instance_15 = new lib.Title_s();
	this.instance_15.setTransform(-106.5,0.4);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15).to({_off:false},0).wait(1).to({x:-105.6,alpha:0.071},0).wait(1).to({x:-104.7,alpha:0.143},0).wait(1).to({x:-103.8,alpha:0.214},0).wait(1).to({x:-102.9,alpha:0.286},0).wait(1).to({x:-102,alpha:0.357},0).wait(1).to({x:-101.1,alpha:0.429},0).wait(1).to({x:-100.2,alpha:0.5},0).wait(1).to({x:-99.2,alpha:0.571},0).wait(1).to({x:-98.3,alpha:0.643},0).wait(1).to({x:-97.4,alpha:0.714},0).wait(1).to({x:-96.5,alpha:0.786},0).wait(1).to({x:-95.6,alpha:0.857},0).wait(1).to({x:-94.7,alpha:0.929},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.4,-3.1,7.6,7.1);


(lib.PirelliLogoSlogan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo
	this.instance = new lib.Logo();
	this.instance.setTransform(0.2,-6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Slogan
	this.instance_1 = new lib.slogan();
	this.instance_1.setTransform(0.2,0.6,1,1,0,0,0,0,-19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-23,115,47.1);


(lib.FumaçaAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Fumaça();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3,alpha:0.957},0).wait(1).to({rotation:5.9,alpha:0.913},0).wait(1).to({rotation:8.9,alpha:0.87},0).wait(1).to({rotation:11.8,alpha:0.826},0).wait(1).to({rotation:14.8,alpha:0.783},0).wait(1).to({rotation:17.7,alpha:0.739},0).wait(1).to({rotation:20.7,alpha:0.696},0).wait(1).to({rotation:23.6,alpha:0.652},0).wait(1).to({rotation:26.6,alpha:0.609},0).wait(1).to({rotation:29.5,alpha:0.565},0).wait(1).to({rotation:32.5,alpha:0.522},0).wait(1).to({rotation:35.5,alpha:0.478},0).wait(1).to({rotation:38.4,alpha:0.435},0).wait(1).to({rotation:41.4,alpha:0.391},0).wait(1).to({rotation:44.3,alpha:0.348},0).wait(1).to({rotation:47.3,alpha:0.304},0).wait(1).to({rotation:50.2,alpha:0.261},0).wait(1).to({rotation:53.2,alpha:0.217},0).wait(1).to({rotation:56.1,alpha:0.174},0).wait(1).to({rotation:59.1,alpha:0.13},0).wait(1).to({rotation:62.1,alpha:0.087},0).wait(1).to({rotation:65,alpha:0.043},0).wait(1).to({rotation:68,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.2,-135.8,274.4,271.7);


(lib.Full_ad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tampao
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("EhDxA4fMAAAhw9MCHjAAAMAAABw9gA6PV2MA0eAAAMAAAgruMg0eAAAg");
	this.shape.setTransform(168,140.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(174));

	// Logo_Pirelli
	this.instance = new lib.PirelliLogoSlogan();
	this.instance.setTransform(452.3,245.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({x:260,y:245.5},7).wait(103));

	// Rodas Vindo
	this.instance_1 = new lib.Rodas_MC();
	this.instance_1.setTransform(331.9,132.2,0.042,0.042,0,0,0,0,-2.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},0).wait(1).to({regX:0.9,regY:-1.9,scaleX:0.05,scaleY:0.05,x:324.2,y:133},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:317.7,y:137.3},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:312.5,y:143.3},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:308.4,y:149.9},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:304.8,y:156.9},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:301.6,y:164.1},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:298.7,y:171.3},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:295.9,y:178.7},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:293.3,y:186.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:290.8,y:193.6},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:288.4,y:201.1},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:286.1,y:208.6},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:283.8,y:216.1},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:281.6,y:223.6},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:279.3,y:231.2},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:277.1,y:238.8},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:275,y:246.3},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:272.8,y:253.8},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:270.6,y:261.4},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:268.5,y:269},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:266.4,y:276.5},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:264.2,y:284.1},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:262.1,y:291.6},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:259.9,y:299.2},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:257.8,y:306.7},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:255.6,y:314.3},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:253.5,y:321.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:251.3,y:329.5},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:249.1,y:337},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:247,y:344.5},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:244.7,y:352.1},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:242.5,y:359.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:240.3,y:367.1},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:238.1,y:374.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:235.8,y:382.2},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:233.6,y:389.7},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:231.3,y:397.3},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:229,y:404.8},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:226.7,y:412.3},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:224.4,y:419.8},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:222.1,y:427.3},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:219.8,y:434.8},0).wait(67));

	// Maras Roda
	this.instance_2 = new lib.FumaçaAnimate();
	this.instance_2.setTransform(333.6,131.8,0.074,0.074);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).wait(107));

	// Rodas
	this.instance_3 = new lib.Rodas_MC();
	this.instance_3.setTransform(204.4,304,1,1,0,0,0,174.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({regX:0,x:30.2},0).to({regX:0.8,regY:-1.9,scaleX:0.36,scaleY:0.36,x:66,y:281.8},45).wait(116));

	// Title
	this.instance_4 = new lib.Title();
	this.instance_4.setTransform(191.1,113.5,1.251,1.296,0,0,0,0,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(61).to({_off:false},0).wait(113));

	// Slogan
	this.instance_5 = new lib.UMANOVAESTRADAPARAASUAAVENTURA();
	this.instance_5.setTransform(191,147,1,1,0,0,0,143,19);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({_off:false},0).to({y:137,alpha:1},4).wait(107));

	// Fundo
	this.instance_6 = new lib.BigFundo();
	this.instance_6.setTransform(168,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({y:140},42).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.8,-221.4,867.7,865.5);


// stage content:



(lib.PirelliAnimação = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FullScene
	this.instance = new lib.Full_ad();
	this.instance.setTransform(819.5,684,1,1,0,0,0,820,684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.4,-81.4,867.7,865.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;