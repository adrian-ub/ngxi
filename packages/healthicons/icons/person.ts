import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPersonIcon],svg[healthicons-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 36c0-4.965 11.993-8 18-8c6.008 0 18 3.035 18 8v6H6z"></svg:path><svg:path fill-rule="evenodd" d="M24 26c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10s4.477 10 10 10" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPersonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
