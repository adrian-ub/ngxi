import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarOneQuarter12FilledIcon],svg[fluent-star-one-quarter-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 2.12l-.828 1.678l-2.486.362a.798.798 0 0 0-.444 1.364l1.8 1.754l-.425 2.475a.8.8 0 0 0-.005.254a.8.8 0 0 0 1.165.59L5 9.954z"></svg:path>`,
})
export class FluentStarOneQuarter12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
