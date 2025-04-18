import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquaresNested20FilledIcon],svg[fluent-squares-nested-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1.764A3 3 0 0 0 15 7h-5a3 3 0 0 0-3 3v5c0 .768.289 1.47.764 2H6a3 3 0 0 1-3-3zm7 11h4a3 3 0 0 0 3-3v-4a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2"></svg:path>`,
})
export class FluentSquaresNested20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
