import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSnappdriverIcon],svg[arcticons-snappdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="21.211" cy="36.036" r="4.251"></svg:circle><svg:path d="m31.435 7.759l-3.868 14.67c-.927 3.517-1.501 6.386-5.181 6.421l-3.598.034l5.66-21.119z"></svg:path></svg:g>`,
})
export class ArcticonsSnappdriverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
