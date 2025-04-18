import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompasMiniDuotoneIcon],svg[lets-icons-compas-mini-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="m18.785 14.078l1.627-8.136a2 2 0 0 0-2.354-2.354L9.922 5.216a6 6 0 0 0-4.706 4.706l-1.628 8.136a2 2 0 0 0 2.354 2.354l8.136-1.627a6 6 0 0 0 4.707-4.707M12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10" clip-rule="evenodd"></svg:path><svg:circle cx="12" cy="12" r="2" stroke="currentColor" stroke-linecap="round" stroke-width="2"></svg:circle></svg:g>`,
})
export class LetsIconsCompasMiniDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
