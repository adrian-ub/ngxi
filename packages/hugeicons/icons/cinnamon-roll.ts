import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCinnamonRollIcon],svg[hugeicons-cinnamon-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 9c0 3.314-4.477 6-10 6S2 12.314 2 9s4.477-6 10-6s10 2.686 10 6"></svg:path><svg:path d="M12 6.854c3-1.413 5 .863 5 1.928c0 3.17-10 3.005-10-.9C7 5.498 9 3 12 3"></svg:path><svg:path d="M22 9v6c0 3.314-4.477 6-10 6S2 18.314 2 15V9"></svg:path></svg:g>`,
})
export class HugeiconsCinnamonRollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
