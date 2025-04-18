import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBugAntivirusShieldIcon],svg[streamline-bug-antivirus-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.36 13.4a1 1 0 0 1-.72 0v0A9.59 9.59 0 0 1 .5 4.46V1.54a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.92a9.59 9.59 0 0 1-6.14 8.94"></svg:path><svg:path d="M9 7V5a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0M3.5 6H5m4 0h1.5M5 5.5h4m-.187-1.312L10 3M8.813 7.813L10 9M5.188 7.813L4 9m1.188-4.812L4 3"></svg:path></svg:g>`,
})
export class StreamlineBugAntivirusShieldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
