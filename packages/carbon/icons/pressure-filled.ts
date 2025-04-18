import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPressureFilledIcon],svg[carbon-pressure-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 30H10v-5H6l10-9l10 9h-4zm-6-14L6 7h4V2h12v5h4z"></svg:path>`,
})
export class CarbonPressureFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
