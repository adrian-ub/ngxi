import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTimeProgressIcon],svg[lets-icons-time-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.636 5.636A9 9 0 1 0 12 3m0 9L6 6m6-3v2m9 7h-2m-7 7v2m-7-9H3"></svg:path>`,
})
export class LetsIconsTimeProgressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
