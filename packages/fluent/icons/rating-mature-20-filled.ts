import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRatingMature20FilledIcon],svg[fluent-rating-mature-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm4.924 1.235A.5.5 0 0 0 7 7.5v5a.5.5 0 1 0 1 0V9.243l1.576 2.522a.5.5 0 0 0 .848 0L12 9.243V12.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.924-.265L10 10.557z"></svg:path>`,
})
export class FluentRatingMature20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
