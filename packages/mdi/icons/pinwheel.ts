import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPinwheelIcon],svg[mdi-pinwheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23z"></svg:path>`,
})
export class MdiPinwheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
