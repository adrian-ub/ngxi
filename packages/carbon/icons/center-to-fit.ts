import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCenterToFitIcon],svg[carbon-center-to-fit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H2v6h2V4h4zm16 0h6v6h-2V4h-4zM8 30H2v-6h2v4h4zm16 0h6v-6h-2v4h-4zm0-6H8a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M8 10v12h16V10z"></svg:path>`,
})
export class CarbonCenterToFitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
