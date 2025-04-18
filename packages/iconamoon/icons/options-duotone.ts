import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonOptionsDuotoneIcon],svg[iconamoon-options-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="9" cy="16" r="2" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="15" cy="8" r="2" fill="currentColor" opacity=".16"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h9m4 0h3m-9 8h9M4 16h3"></svg:path><svg:circle cx="9" cy="16" r="2" stroke="currentColor" stroke-width="2"></svg:circle><svg:circle cx="15" cy="8" r="2" stroke="currentColor" stroke-width="2"></svg:circle></svg:g>`,
})
export class IconamoonOptionsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
