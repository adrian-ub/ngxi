import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNoPovertyIcon],svg[streamline-no-poverty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.8 2.501a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0-3.6 0m4.5 6.3v-.9a2.7 2.7 0 0 0-5.063-1.307M1.6 2.501a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0-3.6 0m-.9 6.3v-.9a2.7 2.7 0 0 1 5.063-1.307"></svg:path><svg:path d="M5.201 7.899a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0-3.6 0m4.5 5.4a2.7 2.7 0 0 0-5.4 0"></svg:path></svg:g>`,
})
export class StreamlineNoPovertyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
