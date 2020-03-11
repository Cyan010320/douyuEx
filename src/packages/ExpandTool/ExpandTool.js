
function initPkg_ExpandTool() {
	initPkg_ExpandTool_Dom();
    initPkg_ExpandTool_Func();

	// initPkg_ExpandTool_RedPacket_Motorcade();
	initPkg_ExpandTool_RedPacket_Room();
	initPkg_ExpandTool_ClearBag();
    initPkg_ExpandTool_SendGift();
    initPkg_ExpandTool_BarrageSize();
}


function initPkg_ExpandTool_Dom() {
	// Dom初始化
	ExpandTool_insertModal();
    ExpandTool_insertIcon();
    
}
function ExpandTool_insertModal() {
	let a = document.createElement("div");
	a.className = "extool";
	
	let b = document.getElementsByClassName("layout-Player-chat")[0];
	b.insertBefore(a, b.childNodes[0]);
}
function ExpandTool_insertIcon() {
	let a = document.createElement("div");
	a.className = "extool-icon";
	a.innerHTML = '<a class="ex-panel__icon" title="扩展功能"><svg t="1578755163250" style="display: block;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16761" width="32" height="32"><path d="M816.784579 684.416257L646.90465 812.225921c-21.984461 16.588275-50.963979-1.898658-50.963979-32.477045l0.299788-183.270465c0-13.890182 6.495409-26.781071 16.987993-33.576268L782.808593 452.779977c21.984461-14.2899 49.16525 4.296963 49.16525 33.676197v165.682896c0 12.990818-5.695974 25.182201-15.189264 32.277187z" fill="#d81e06" p-id="16762"></path><path d="M809.689594 324.970312l-1.698799-2.798022c-8.194208-13.290606-25.681848-17.38771-38.972455-9.293432l-254.819894 156.989041-271.508099-156.689253c-14.090041-8.194208-32.377116-3.297669-40.471395 10.892302l-0.999293 1.698799c-7.794491 13.490465-3.09781 30.878175 10.392654 38.672666l273.806475 158.088264c-2.098517 3.897245-3.297669 8.394067-3.29767 13.190677v321.772572c0 16.288487 13.290606 29.679023 29.679023 29.679023h1.998588c15.588982 0 28.280012-12.790959 28.280011-28.280012V535.821283c0-3.997175-0.799435-7.794491-2.298375-11.192089l260.715727-160.586498c13.190677-8.194208 17.38771-25.781778 9.193502-39.072384z" fill="#d81e06" p-id="16763"></path><path d="M379.993302 708.799023L203.917752 607.170854c-13.790253-7.89442-18.486933-25.681848-10.592514-39.472102l1.099223-1.898658c7.89442-13.790253 25.681848-18.486933 39.472102-10.592513l176.07555 101.62817c13.790253 7.89442 18.486933 25.681848 10.592513 39.472101l-1.099223 1.898658c-7.99435 13.790253-25.681848 18.586863-39.472101 10.592513zM116.079835 738.278187l-27.980224 20.485521c-6.595338 0-19.985874 23.583331-19.985874 16.987993V275.605203c0-6.595338 5.396186-11.991524 11.991525-11.991524h35.974573c6.595338 0 11.991524 5.396186 11.991525 11.991524l-3.797317 464.671572c0 6.495409-1.59887-1.998587-8.194208-1.998588z" fill="#d81e06" p-id="16764"></path><path d="M135.066415 280.102025l-66.053313-4.396893c-3.497528-5.596045 2.897952-27.180789 8.593926-30.578387L461.23588 8.593926c5.596045-3.497528 12.990818-1.698799 16.488346 3.897245l28.879588 28.779659c3.497528 5.596045 3.397599 8.394067-2.298376 11.891595L135.066415 280.102025c-5.596045 3.397599 3.497528 5.596045 0 0zM936.699823 754.866463h-35.974573c-6.595338 0-11.991524-5.396186-11.991524-11.991525V279.502449c0-12.69103 7.094985-10.092866 13.690324-10.092867l34.275773 10.692443c6.595338 0 11.991524 5.396186 11.991525 11.991524l3.997175 485.756669c0 6.695268-9.393361-22.983755-15.9887-22.983755z" fill="#d81e06" p-id="16765"></path><path d="M931.503496 309.581189l-7.094985-8.793785c-2.098517-2.598164-5.596045-3.597457-8.893714-2.897951-8.194208 1.798729-22.584038-11.09216-31.177964-16.388417L517.496115 65.853455c-0.399717-0.199859-0.799435-0.499647-1.099223-0.799435-11.891595-10.492584-59.857693 11.192089-57.859105 6.39548 0.299788-0.799435 0.699506-1.698799 0.899364-2.498235l9.893008-56.460094c0.499647-2.997881 2.498234-5.496115 5.396186-6.595338 16.987993-6.495409 70.050489-4.296963 79.044132 1.299082l378.432525 233.934655c0.399717 0.199859 0.699506 0.499647 1.099223 0.799435 14.189971 12.191383 18.586863 47.266592 13.390536 64.654303-2.098517 6.695268-10.792372 8.394067-15.189265 2.997881zM69.712607 769.256292l41.970336-31.477752c3.297669-5.695974 4.896539-4.496822 10.592513-1.199152l380.231254 224.041648c5.695974 3.297669 28.479871-1.898658 25.182201 3.797316l11.991525 56.260236c-3.297669 5.695974-57.359459 3.497528-62.255998-2.298376L75.008864 782.946616c-5.995762-3.497528-8.793785-7.694562-5.296257-13.690324z" fill="#d81e06" p-id="16766"></path><path d="M518.29555 1020.578658l-26.681142-17.287781c-3.497528-5.596045 0.199859-31.477752 5.795904-34.975279l394.920871-230.037411c5.596045-3.497528 12.990818-1.698799 17.287781-13.690323l43.868994 35.774714c2.698093 23.283543-12.391242 19.08651-17.987287 22.584038l-360.24538 219.045179c-4.79661 13.290606-53.462213 24.282837-56.959741 18.586863z" fill="#d81e06" p-id="16767"></path></svg><i id="extool__tip" class="ex-panel__tip"></i></a>';
	
	let b = document.getElementsByClassName("ex-panel__wrap")[0];
	b.insertBefore(a, b.childNodes[0]);
	
}



function initPkg_ExpandTool_Func() {
	// 函数初始化
	// 将onclick事件绑定在这里
	document.getElementsByClassName("extool-icon")[0].addEventListener("click", function() {
		let a = document.getElementsByClassName("extool")[0];
		if (a.style.display != "block") {
			a.style.display = "block";
			if (document.getElementsByClassName("bloop")[0].style.display == "block") {
				document.getElementsByClassName("bloop")[0].style.display = "none";
			}
		} else {
			a.style.display = "none";
		}
	});
}
