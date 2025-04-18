import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonConfusedFaceDuotoneIcon],svg[iconamoon-confused-face-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M9 9.5h.01v.01H9zm6 0h.01v.01H15z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 14c-1.48 0-2.773.804-3.465 2"></svg:path></svg:g>`,
})
export class IconamoonConfusedFaceDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
