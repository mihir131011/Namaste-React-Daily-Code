export default Shimmer = () => {
  return (
    <>
      {Array(3)
        .fill("")
        .map((index) => (
          <div key={index} className="shimmer-card">
            <section class="text-gray-700 body-font">
              <div class="container px-5 py-3 mx-auto">
                <div class="flex flex-row flex-wrap -m-4">
                  <div class="p-4 md:w-1/3">
                    <div class="w-52 p-2 m-2 h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                      <div class="lg:h-36 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                      <div class="p-6">
                        <h1 class="w-1/2 mb-4 h-4 animate-pulse bg-gray-500"></h1>
                        <p class="leading-relaxed mb-3 w-full h-2 animate-pulse bg-gray-400"></p>
                        <p class="leading-relaxed mb-3 w-2/3 h-2 animate-pulse bg-gray-400"></p>
                        <p class="leading-relaxed mb-3 w-1/2 h-2 animate-pulse bg-gray-400"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
    </>
  );
};
