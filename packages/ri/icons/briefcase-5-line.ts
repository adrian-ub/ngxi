import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBriefcase5LineIcon],svg[ri-briefcase-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 10h-3v1h-2v-1H8v4h8zM8 7v6h3v-1h2v1h3V7zm-2 6V7H4v6zm12 0h2V7h-2zM6 15H4v4h2zm12 0v4h2v-4zM9 3v2h6V3z"></svg:path>`,
})
export class RiBriefcase5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
