import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBroom16RegularIcon],svg[fluent-broom-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.854 1.146a.5.5 0 0 0-.707 0L9.476 5.817c-1.452-1.103-3.507-.937-4.823.373l-.684.639l-2.676 1.216a.5.5 0 0 0-.147.809l6 6a.5.5 0 0 0 .81-.147l1.212-2.667l.685-.686a3.67 3.67 0 0 0 .33-4.83l4.67-4.67a.5.5 0 0 0 0-.708M4.14 7.85l4.01 4.01l-.808 1.777l-4.98-4.98zm4.609 3.194l-3.78-3.78l.371-.347l.012-.012c1.065-1.065 2.75-1.095 3.793-.05a2.67 2.67 0 0 1 0 3.793z"></svg:path>`,
})
export class FluentBroom16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
