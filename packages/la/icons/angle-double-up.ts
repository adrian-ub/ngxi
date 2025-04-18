import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laAngleDoubleUpIcon],svg[la-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4.688L3.781 16.905l1.438 1.407L16 7.53l10.781 10.782l1.438-1.407zm0 7L3.781 23.905l1.438 1.407L16 14.53l10.781 10.781l1.438-1.406z"></svg:path>`,
})
export class LaAngleDoubleUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
