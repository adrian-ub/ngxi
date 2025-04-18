import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWowLightIcon],svg[lets-icons-wow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:circle cx="9" cy="9" r="1" fill="currentColor" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:circle cx="15" cy="9" r="1" fill="currentColor" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:path fill="currentColor" d="M15 15.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5s1.343-2.5 3-2.5s3 1.12 3 2.5"></svg:path></svg:g>`,
})
export class LetsIconsWowLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
