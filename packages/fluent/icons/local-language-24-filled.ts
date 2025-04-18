import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocalLanguage24FilledIcon],svg[fluent-local-language-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.563 7.505l.056.117l5.307 13.005a1 1 0 0 1-1.802.86l-.05-.105L11.693 18H5.407l-1.49 3.407a1 1 0 0 1-1.208.555l-.11-.04a1 1 0 0 1-.556-1.208l.04-.11L7.778 7.6c.336-.77 1.394-.795 1.786-.094M19 2a1 1 0 0 1 .993.883L20 3v4h1a1 1 0 0 1 .993.883L22 8a1 1 0 0 1-.883.993L21 9h-1v7a1 1 0 0 1-.883.993L19 17a1 1 0 0 1-.993-.883L18 16V3a1 1 0 0 1 1-1M8.66 10.567L6.282 16h4.595zM11 2h5a1 1 0 0 1 .993.883L17 3v2.975a4 4 0 0 1-4 4a1 1 0 1 1 0-2a2 2 0 0 0 1.995-1.85l.005-.15V4h-4a1 1 0 0 1-.117-1.993zh5z"></svg:path>`,
})
export class FluentLocalLanguage24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
