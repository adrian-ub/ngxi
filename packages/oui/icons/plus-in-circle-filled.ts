import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiPlusInCircleFilledIcon],svg[oui-plus-in-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7V3.5a.5.5 0 0 0-1 0V7H3.5a.5.5 0 0 0 0 1H7v3.5a.5.5 0 1 0 1 0V8h3.5a.5.5 0 1 0 0-1zm-.5 8a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15"></svg:path>`,
})
export class OuiPlusInCircleFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
