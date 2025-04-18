import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRadioButton16FilledIcon],svg[fluent-radio-button-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-9a6 6 0 1 0 0 12A6 6 0 0 0 8 2M3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8"></svg:path>`,
})
export class FluentRadioButton16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
