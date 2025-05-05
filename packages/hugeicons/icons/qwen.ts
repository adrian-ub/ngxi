import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQwenIcon],svg[hugeicons-qwen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 2h3.5L14 4.5h5.13L20.5 7m1.5 7.5l-1.645 2.663h-2.477L15 22h-3.217M5 20l-1.5-2.5l1-3l-2.5-5L4 7"></svg:path><svg:path d="m19.19 9.662l1.31-2.661H10l1-2l-2-3l-2.251 5H4l5 10H6l-1 3h5.5l1.252 2l5.65-9.935L18.94 14.5H22z"></svg:path><svg:path d="M12 15.5L9 10h6z"></svg:path></svg:g>`,
})
export class HugeiconsQwenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
