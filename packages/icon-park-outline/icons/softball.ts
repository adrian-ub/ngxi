import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSoftballIcon],svg[icon-park-outline-softball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M24 44c11.05 0 20-8.95 20-20S35.05 4 24 4S4 12.95 4 24s8.95 20 20 20Z"></svg:path><svg:path stroke-linecap="round" d="M10 38c3.7-3.63 6-8.41 6-14c0-5.52-2.38-10.38-6-14m28 28c-3.7-3.63-6-8.41-6-14c0-5.52 2.38-10.38 6-14M28 24h8m-24 0h8m10 10l6-3m0-14l-6-3M18 34l-6-3m0-14l6-3"></svg:path></svg:g>`,
})
export class IconParkOutlineSoftballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
