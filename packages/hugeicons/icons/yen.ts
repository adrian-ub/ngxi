import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYenIcon],svg[hugeicons-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3c.467 1.731 2.52 5.667 7 7.556m0 0C16.48 8.666 18.533 4.73 19 3m-7 7.556V21m-5.834-8h11.667M6.166 17h11.667" color="currentColor"></svg:path>`,
})
export class HugeiconsYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
