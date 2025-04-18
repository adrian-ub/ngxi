import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siEditDetailedAltDuotoneIcon],svg[si-edit-detailed-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m4.929 19.071l.707-3.536l9.192-9.192l2.829 2.829l-9.193 9.192z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.071 7.757L8.464 18.364l-3.535.707l.707-3.535L16.243 4.929m2.828 2.828a2 2 0 0 0-2.828-2.828m2.828 2.828l-1.414 1.415l-2.829-2.829l1.415-1.414"></svg:path></svg:g>`,
})
export class SiEditDetailedAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
