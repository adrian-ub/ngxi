import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAlignCenterVerticalOutlineIcon],svg[teenyicons-align-center-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M15 7.5h-3.5m-8 0H0m8.5 0h-2m5 3.5h-3V4h3zm-5 2.5h-3v-12h3z"></svg:path>`,
})
export class TeenyiconsAlignCenterVerticalOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
