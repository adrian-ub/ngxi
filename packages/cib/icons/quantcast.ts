import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibQuantcastIcon],svg[cib-quantcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.146 27.297A13.37 13.37 0 0 0 26.318 16c0-7.365-5.896-13.333-13.161-13.333S.001 8.636.001 16c0 7.365 5.891 13.333 13.156 13.333h18.844v-2.036z"></svg:path>`,
})
export class CibQuantcastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
