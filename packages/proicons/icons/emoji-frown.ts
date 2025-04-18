import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsEmojiFrownIcon],svg[proicons-emoji-frown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle><svg:circle cx="9" cy="9.5" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="9.5" r="1.25" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.464 15.813a4 4 0 0 0-6.928 0"></svg:path></svg:g>`,
})
export class ProiconsEmojiFrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
