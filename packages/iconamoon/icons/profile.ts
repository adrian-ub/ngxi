import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonProfileIcon],svg[iconamoon-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></svg:path><svg:circle cx="12" cy="7" r="3"></svg:circle></svg:g>`,
})
export class IconamoonProfileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
