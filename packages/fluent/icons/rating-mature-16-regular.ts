import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRatingMature16RegularIcon],svg[fluent-rating-mature-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.924 5.235A.5.5 0 0 0 5 5.5v5a.5.5 0 1 0 1 0V7.243l1.576 2.522a.5.5 0 0 0 .848 0L10 7.243V10.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.924-.265L8 8.557zM4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM3 4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5z"></svg:path>`,
})
export class FluentRatingMature16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
