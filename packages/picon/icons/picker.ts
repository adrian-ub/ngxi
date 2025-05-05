import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPickerIcon],svg[picon-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2L3 4.5l.5.5L6 3M1 8H0V7l5-6V0h3v3H7"></svg:path>`,
})
export class PiconPickerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
