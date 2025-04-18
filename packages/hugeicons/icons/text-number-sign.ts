import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextNumberSignIcon],svg[hugeicons-text-number-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 20V7.022C2 5.105 2 4 2.439 4c.521 0 .896.66 1.811 2.273l6.5 11.454C11.665 19.34 12.023 20 12.56 20c.44 0 .44-1.105.44-3.022V4m3 9h6m-5.42-8.42c.775-.774 4.065-.774 4.84 0c.773.775.773 4.065 0 4.84c-.775.774-4.065.774-4.84 0c-.773-.775-.773-4.065 0-4.84" color="currentColor"></svg:path>`,
})
export class HugeiconsTextNumberSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
