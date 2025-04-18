import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCheckIcon],svg[la-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.281 6.281L11 23.563L3.719 16.28L2.28 17.72l8 8l.719.687l.719-.687l18-18z"></svg:path>`,
})
export class LaCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
