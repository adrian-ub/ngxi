import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureRanslation1Icon],svg[tdesign-gesture-ranslation-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.98 1.545l.823.568a12.1 12.1 0 0 1 3.084 3.084l.568.824l-1.647 1.135l-.568-.824a10.1 10.1 0 0 0-2.572-2.572l-.823-.568zm-6.524 5.332a.388.388 0 0 0-.548.548l5.237 5.237l-1.415 1.415l-6.603-6.604a.388.388 0 0 0-.548.548l6.603 6.604l-1.414 1.414l-5.237-5.237a.388.388 0 0 0-.548.549l5.237 5.236l-1.415 1.415l-3.151-3.152a.386.386 0 0 0-.546.545l4.32 4.32a5.19 5.19 0 0 0 7.34 0l.844-.844a5.19 5.19 0 0 0 .812-6.286l-2.227-3.813a.145.145 0 0 0-.266.111l.669 2.496a1.01 1.01 0 0 1-.277.986a1 1 0 0 1-1.397-.017zM5.99 13.185l-.42-.42a2.388 2.388 0 0 1 .326-3.65A2.388 2.388 0 0 1 9.22 5.79q.12-.172.274-.327a2.39 2.39 0 0 1 3.376 0l3.078 3.078a2.145 2.145 0 0 1 3.976-.777l2.227 3.812a7.19 7.19 0 0 1-1.125 8.71l-.844.844a7.19 7.19 0 0 1-10.168 0l-4.32-4.32a2.386 2.386 0 0 1 .295-3.625m-2.796 3.659l.567.823a10.1 10.1 0 0 0 2.573 2.573l.823.567l-1.135 1.647l-.823-.567a12.1 12.1 0 0 1-3.085-3.085l-.567-.823z"></svg:path>`,
})
export class TdesignGestureRanslation1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
