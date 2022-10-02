const main_content = Vue.createApp({

})

main_content.component('top',{
    template:`
        <div class="top content">
            <div>
                TOP
            </div>
        </div>
    `
})

main_content.component('left',{
    template:`
        <div class="left content">
            <div>
                Left
            </div>
        </div>
    `
})

main_content.component('right',{
    template:`
        <div class="right content">
            <div>
                Right
            </div>
        </div>
    `
})

main_content.component('back',{
    template:`
        <div class="back content">
            <div>
                back
            </div>
        </div>
    `
})