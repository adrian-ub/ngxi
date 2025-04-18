import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceVolumeControlTelephoneIcon],svg[guidance-volume-control-telephone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M15.553 10.972c2.08-2.194 2.08-5.75 0-7.944M17.95 13.5c3.402-3.59 3.402-9.41 0-13M13.5 8.806c.945-.998.945-2.614 0-3.612M6.94 23.5c-4.587-5.247-4.587-13.753 0-19h3.56v4.75H7.534v9.5H10.5v4.75z"></svg:path>`,
})
export class GuidanceVolumeControlTelephoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
