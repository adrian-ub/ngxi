import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPowerIcon],svg[carbon-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.5 5.74l-1 1.73a11 11 0 1 1-11 0l-1-1.73a13 13 0 1 0 13 0"></svg:path><svg:path fill="currentColor" d="M15 2h2v14h-2z"></svg:path>`,
})
export class CarbonPowerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
