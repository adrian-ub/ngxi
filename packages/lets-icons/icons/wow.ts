import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWowIcon],svg[lets-icons-wow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-width="2"></svg:circle><svg:circle cx="9" cy="9" r="1.25" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width=".5"></svg:circle><svg:circle cx="15" cy="9" r="1.25" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width=".5"></svg:circle><svg:path fill="currentColor" d="M15 15.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5s1.343-2.5 3-2.5s3 1.12 3 2.5"></svg:path></svg:g>`,
})
export class LetsIconsWowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
