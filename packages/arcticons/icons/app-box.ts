import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAppBoxIcon],svg[arcticons-app-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="c"><svg:path d="m40.9 14.273l-.055 19.454L24.061 43.5V24.047zm-16.839 9.774V43.5L7.1 33.727l.055-19.454z"></svg:path><svg:path d="m40.9 14.273l-16.839 9.774l-16.906-9.774L23.973 4.5z"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.083 6.761v20.486H13.56l10.501 10.476l10.175-10.464l-6.153-.012V6.873"></svg:path>`,
})
export class ArcticonsAppBoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
