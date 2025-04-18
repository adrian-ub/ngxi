import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCovidscancstIcon],svg[arcticons-covidscancst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.5 42.5h5c2.216 0 4-1.784 4-4v-5m-37 0v5c0 2.216 1.784 4 4 4h5m28-28v-5c0-2.216-1.784-4-4-4h-5m-19 0h-5c-2.216 0-4 1.784-4 4v5m26.527.5H15.973a.973.973 0 0 0-.973.973v16.054c0 .537.436.973.973.973h16.054a.973.973 0 0 0 .973-.973V15.973a.973.973 0 0 0-.973-.973M8.5 24h31"></svg:path>`,
})
export class ArcticonsCovidscancstIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
