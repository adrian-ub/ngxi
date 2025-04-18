import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRemoveDuotoneIcon],svg[lets-icons-remove-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-width="1.2" d="M8 12h8"></svg:path></svg:g>`,
})
export class LetsIconsRemoveDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
