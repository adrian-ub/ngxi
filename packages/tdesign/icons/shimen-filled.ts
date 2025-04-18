import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShimenFilledIcon],svg[tdesign-shimen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.998 1.996l11 1.1v4.81l-2.932.293L21.074 22h-7.162l1.096-13.288l-3.01.287l-2.914-.286L10.076 22H2.922L3.93 8.199L.998 7.906v-4.81zM5.921 8.398L5.074 20H7.92L7.063 8.512zm11.11.113L16.084 20h2.838l-.846-11.6z"></svg:path>`,
})
export class TdesignShimenFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
