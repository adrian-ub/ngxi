import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneDuotoneLineIcon],svg[lets-icons-done-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="10" cy="14" r="7" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-width="1.2" d="m6 13l4 3l7-9"></svg:path></svg:g>`,
})
export class LetsIconsDoneDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
