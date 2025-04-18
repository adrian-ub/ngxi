import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsKeyIcon],svg[lets-icons-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="9" cy="14" r="4"></svg:circle><svg:path stroke-linecap="round" d="m12 11l3.5-3.5M17 6l-1.5 1.5m0 0L18 10"></svg:path></svg:g>`,
})
export class LetsIconsKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
