import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiNotBrightIcon],svg[ooui-not-bright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9.85" cy="10" r="9" fill="currentColor"></svg:circle>`,
})
export class OouiNotBrightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
