import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesk32RegularIcon],svg[fluent-desk-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 4A3.25 3.25 0 0 0 2 7.25V23.5A4.5 4.5 0 0 0 6.5 28h5a4.5 4.5 0 0 0 4.5-4.5V12h12v15a1 1 0 1 0 2 0V7.25A3.25 3.25 0 0 0 26.75 4zM4 12h10v11.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 4 23.5zm0-2V7.25C4 6.56 4.56 6 5.25 6h21.5c.69 0 1.25.56 1.25 1.25V10zm3 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentDesk32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
