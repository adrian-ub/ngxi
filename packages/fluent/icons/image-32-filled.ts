import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImage32FilledIcon],svg[fluent-image-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17c0 .849.235 1.643.644 2.32l10.588-10.588a2.5 2.5 0 0 1 3.536 0l10.588 10.589A4.5 4.5 0 0 0 29 24.5v-17A4.5 4.5 0 0 0 24.5 3zm17 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.47 17.262L16.354 17.646a.5.5 0 0 0-.707 0L5.03 28.262A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 2.47-.738"></svg:path>`,
})
export class FluentImage32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
