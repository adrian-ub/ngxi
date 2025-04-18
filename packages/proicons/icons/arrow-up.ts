import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowUpIcon],svg[proicons-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20V4.121M5.25 10.25l5.69-5.69A1.5 1.5 0 0 1 12 4.121m6.75 6.129l-5.69-5.69A1.5 1.5 0 0 0 12 4.122"></svg:path>`,
})
export class ProiconsArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
