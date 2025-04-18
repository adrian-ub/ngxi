import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siEditDetailedDuotoneIcon],svg[si-edit-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m4.929 19.071l.707-3.535l9.192-9.193l2.829 2.829l-9.193 9.192z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14.828 6.343l2.829 2.829m.566-5.091l1.697 1.697a.8.8 0 0 1 0 1.13L8.464 18.365l-3.535.707l.707-3.535L17.091 4.08a.8.8 0 0 1 1.132 0"></svg:path></svg:g>`,
})
export class SiEditDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
