import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNdbNeosIcon],svg[arcticons-ndb-neos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.293 8.052L5.5 23.361V8.052zm6.379 6.379L11.88 42.5h26.792zM5.5 28.465V42.5l37-37z"></svg:path>`,
})
export class ArcticonsNdbNeosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
