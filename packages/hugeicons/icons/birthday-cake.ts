import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBirthdayCakeIcon],svg[hugeicons-birthday-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5a1.5 1.5 0 0 1-3 0C10.5 3.672 12 2 12 2s1.5 1.672 1.5 2.5M12 6v3m5.667 5c1.564 0 2.833-1.12 2.833-2.5S19.232 9 17.667 9H6.333C4.77 9 3.5 10.12 3.5 11.5S4.769 14 6.333 14c1.371 0 2.571-.859 2.834-2c.262 1.141 1.462 2 2.833 2c1.37 0 2.57-.859 2.833-2c.263 1.141 1.463 2 2.834 2M5 14l.52 2.58c.525 2.597.788 3.895 1.676 4.658c.889.762 2.14.762 4.643.762h.322c2.503 0 3.754 0 4.643-.762c.889-.763 1.15-2.061 1.675-4.658L19 14" color="currentColor"></svg:path>`,
})
export class HugeiconsBirthdayCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
