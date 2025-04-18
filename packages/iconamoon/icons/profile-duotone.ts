import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonProfileDuotoneIcon],svg[iconamoon-profile-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></svg:path><svg:circle cx="12" cy="7" r="3" stroke="currentColor" stroke-width="2"></svg:circle></svg:g>`,
})
export class IconamoonProfileDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
