import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRadioButton20FilledIcon],svg[fluent-radio-button-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-13a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0"></svg:path>`,
})
export class FluentRadioButton20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
