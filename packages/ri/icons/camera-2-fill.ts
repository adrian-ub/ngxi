import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCamera2FillIcon],svg[ri-camera-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 2a5 5 0 1 0 0-10a5 5 0 0 0 0 10m6-12v2h2V5z"></svg:path>`,
})
export class RiCamera2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
