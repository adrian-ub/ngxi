import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCenterCircleIcon],svg[carbon-center-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15h-2.05A12.01 12.01 0 0 0 17 4.05V2h-2v2.05A12.01 12.01 0 0 0 4.05 15H2v2h2.05A12.01 12.01 0 0 0 15 27.95V30h2v-2.05A12.01 12.01 0 0 0 27.95 17H30ZM17 25.95V22h-2v3.95A10.02 10.02 0 0 1 6.05 17H10v-2H6.05A10.02 10.02 0 0 1 15 6.05V10h2V6.05A10.02 10.02 0 0 1 25.95 15H22v2h3.95A10.02 10.02 0 0 1 17 25.95"></svg:path>`,
})
export class CarbonCenterCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
