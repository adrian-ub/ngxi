import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber8DuotoneIcon],svg[iconamoon-number-8-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M17 15a5 5 0 1 1-10 0a5 5 0 0 1 10 0" opacity=".16"></svg:path><svg:circle cx="12" cy="15" r="5" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:circle cx="12" cy="7" r="3" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="7" r="3" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></svg:circle></svg:g>`,
})
export class IconamoonNumber8DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
