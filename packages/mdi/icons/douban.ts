import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDoubanIcon],svg[mdi-douban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 6H4V4h16v2m0 12v2H4v-2h3.33l-1.07-4H5V8h14v6h-1.26l-1.07 4H20M7 12h10v-2H7v2m2.4 6h5.2l1.07-4H8.33l1.07 4z" fill="currentColor"></svg:path>`,
})
export class MdiDoubanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
