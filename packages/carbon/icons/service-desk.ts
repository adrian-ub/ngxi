import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonServiceDeskIcon],svg[carbon-service-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 24.005v-2a12.01 12.01 0 0 0-11-11.95v-2.05h3v-2h-8v2h3v2.05a12.01 12.01 0 0 0-11 11.95v2H2v2h28v-2Zm-12-12a10.02 10.02 0 0 1 9.798 8H6.202a10.02 10.02 0 0 1 9.798-8m-10 10h20v2H6Z"></svg:path>`,
})
export class CarbonServiceDeskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
