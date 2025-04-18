import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsStethoscopeIcon],svg[lets-icons-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="19" cy="14" r="2" fill="currentColor"></svg:circle><svg:circle cx="9" cy="13" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 14v2a5 5 0 0 1-5 5h-2c-2.5 0-3-1.6-3-8m0-1c3.959 0 4.98-2.938 5-5.907a.15.15 0 0 0-.083-.134L12 5m-3 7c-3.959 0-4.98-2.938-5-5.907c0-.057.032-.109.083-.134L6 5"></svg:path></svg:g>`,
})
export class LetsIconsStethoscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
