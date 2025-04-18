import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsProhibitedIcon],svg[proicons-prohibited-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.46 18.54A9.25 9.25 0 0 0 18.54 5.46M5.459 18.541A9.25 9.25 0 0 1 18.54 5.46M5.46 18.54L18.54 5.46"></svg:path>`,
})
export class ProiconsProhibitedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
