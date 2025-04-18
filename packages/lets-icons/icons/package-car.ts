import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPackageCarIcon],svg[lets-icons-package-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="16" cy="19" r="2"></svg:circle><svg:circle cx="9" cy="19" r="2"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 14h6V7m0 0v2H4v8a2 2 0 0 0 2 2h1m4-12h4l4.625 3.7a1 1 0 0 1 .375.78V13m-3-4h-1v4h4m0 0v4a2 2 0 0 1-2 2v0m-4 0h-3"></svg:path></svg:g>`,
})
export class LetsIconsPackageCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
