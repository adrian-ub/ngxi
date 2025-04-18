import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTeahouseIcon],svg[tdesign-teahouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v1h8V2h2v1h1v2h-1v1.667L20.5 10H22v2h-1v8h1v2H2v-2h1v-8H2v-2h1.5L6 6.667V5H5V3h1V2zm0 3v1h8V5zm8.5 3h-9L6 10h12zm2.5 4h-3v8h3zm-5 8v-8h-4v8zm-6 0v-8H5v8z"></svg:path>`,
})
export class TdesignTeahouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
