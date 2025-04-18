import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineQiyehaoIcon],svg[icon-park-outline-qiyehao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m28 19l-13.137-6.914C12.199 10.684 9 12.616 9 15.626V30"></svg:path><svg:path d="m9 30l9-7v-9"></svg:path><svg:path d="m11 12l9-7l16 8l-8 6m-8 10l13.137 6.914c2.664 1.402 5.863-.53 5.863-3.54V18"></svg:path><svg:path d="m39 18l-9 7v9"></svg:path><svg:path d="m37 36l-9 7l-16-8l8-6"></svg:path></svg:g>`,
})
export class IconParkOutlineQiyehaoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
