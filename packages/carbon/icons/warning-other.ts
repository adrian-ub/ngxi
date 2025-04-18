import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWarningOtherIcon],svg[carbon-warning-other-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20h12v2H18zm0 4h12v2H18zm0 4h12v2H18zm-4-10a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 14 18M13 7h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M14 4a10.01 10.01 0 0 1 10 10h2a12 12 0 1 0-12 12v-2a10 10 0 0 1 0-20"></svg:path>`,
})
export class CarbonWarningOtherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
