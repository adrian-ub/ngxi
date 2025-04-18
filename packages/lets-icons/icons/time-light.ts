import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTimeLightIcon],svg[lets-icons-time-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="8.5"></svg:circle><svg:path stroke-linecap="round" d="M16.5 12h-4.25a.25.25 0 0 1-.25-.25V8.5"></svg:path></svg:g>`,
})
export class LetsIconsTimeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
