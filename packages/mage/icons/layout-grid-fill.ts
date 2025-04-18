import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLayoutGridFillIcon],svg[mage-layout-grid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13v9H8.75A6.76 6.76 0 0 1 2 15.25V13zm11 0v2.25A6.76 6.76 0 0 1 15.25 22H13v-9zm0-4.25V11h-9V2h2.25A6.76 6.76 0 0 1 22 8.75M11 2v9H2V8.75A6.76 6.76 0 0 1 8.75 2z"></svg:path>`,
})
export class MageLayoutGridFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
