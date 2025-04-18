import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquaresNested20RegularIcon],svg[fluent-squares-nested-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm10 4.764A3 3 0 0 0 14 7h-4a3 3 0 0 0-3 3v4c0 .768.289 1.47.764 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zM10 16a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z"></svg:path>`,
})
export class FluentSquaresNested20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
