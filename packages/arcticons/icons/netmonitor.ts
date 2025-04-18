import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetmonitorIcon],svg[arcticons-netmonitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.7 7.33v33.34h7.8V7.33Zm-15.6 9v24.34h7.8V16.32Zm7.8 2.89v21.45h7.8V19.21Zm-23.4 6v15.45h7.8V25.23Zm7.8 3.26v12.19h7.8V28.49Z"></svg:path>`,
})
export class ArcticonsNetmonitorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
