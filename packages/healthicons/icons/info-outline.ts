import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsInfoOutlineIcon],svg[healthicons-info-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27 15.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-1 8a2 2 0 0 0-2.743-1.857L18.9 23.386l1.486 3.714L22 26.454V34.5a2 2 0 0 0 2.894 1.789l4.79-2.395l-1.79-3.577l-1.894.947z"></svg:path><svg:path fill-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-2c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsInfoOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
