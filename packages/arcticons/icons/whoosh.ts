import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWhooshIcon],svg[arcticons-whoosh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.941 16.063l-3.97 15.876l-3.968-15.877l-3.97 15.876l-3.969-15.875m18.955 16.459H5.5M9.5 5.5h29.001A3.99 3.99 0 0 1 42.5 9.485V38.5a3.99 3.99 0 0 1-3.98 4H9.501a3.99 3.99 0 0 1-4-3.98V9.5a3.99 3.99 0 0 1 3.983-4z"></svg:path>`,
})
export class ArcticonsWhooshIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
