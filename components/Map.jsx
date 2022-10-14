import React from "react";

function Map() {
  return (
    <div className="h-full w-full lg:px-24">
      <div className="overflow-hidden bg-transparent h-[450px] w-full">
        <iframe
          width="100%"
          height="85%"
          id="gmap_canvas"
          title="mapa"
          src="https://maps.google.com/maps?q=chiclayo&t=&z=13&ie=UTF8&iwloc=&output=embed"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
