import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSportmasterIcon],svg[arcticons-sportmaster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.5 38.36l-27.015-13.7L4.579 38.113l13.383-5.321zm-39-23.045l22.155 11.553l10.378-11.716l-11.546 4.664zm23.55-2.062a3.61 3.61 0 0 1-3.61 3.61a3.611 3.611 0 0 1 0-7.223a3.61 3.61 0 0 1 3.61 3.613"></svg:path>`,
})
export class ArcticonsSportmasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
