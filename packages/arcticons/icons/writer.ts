import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWriterIcon],svg[arcticons-writer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 30.872h11.462M12 23.915h11.462M12 16.957h4.487m27.013 7.24V9.402L30.646 16.8zm-5.396 1.956v10.43a4 4 0 0 1-4 4H8.5a4 4 0 0 1-4-4V11.417a4 4 0 0 1 4-4h29.653"></svg:path>`,
})
export class ArcticonsWriterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
