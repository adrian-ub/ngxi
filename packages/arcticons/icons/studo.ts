import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStudoIcon],svg[arcticons-studo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="32.594" height="32.594" x="7.703" y="7.703" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6" transform="rotate(45 24 24)"></svg:rect><svg:circle cx="24" cy="24" r="4.346" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.927 20.927l-8.451-8.451"></svg:path>`,
})
export class ArcticonsStudoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
