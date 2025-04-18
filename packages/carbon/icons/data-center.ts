import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataCenterIcon],svg[carbon-data-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-5V6a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M4 28V12h5v2H7v2h2v2H7v2h2v2H7v2h2v4Zm17 0H11V6h10Zm7 0h-5v-4h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h5Z"></svg:path><svg:path fill="currentColor" d="M14 8h4v2h-4zm0 4h4v2h-4zm0 4h4v2h-4z"></svg:path>`,
})
export class CarbonDataCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
