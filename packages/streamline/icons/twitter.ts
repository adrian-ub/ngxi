import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTwitterIcon],svg[streamline-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 9.4a6.8 6.8 0 0 1-2.41 1.21a.5.5 0 0 0 0 .94C8.51 14.39 12.91 10 12.24 5.13l1.12-2.32h-1.3C10.44.82 6.14.92 6.85 5.16c0 0-2.3.41-5.24-2.48A.5.5 0 0 0 .76 3A5.52 5.52 0 0 0 4 9.4"></svg:path>`,
})
export class StreamlineTwitterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
