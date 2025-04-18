import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRatingMature16FilledIcon],svg[fluent-rating-mature-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zm3.924.735A.5.5 0 0 0 5 5.5v5a.5.5 0 1 0 1 0V7.243l1.576 2.522a.5.5 0 0 0 .848 0L10 7.243V10.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.924-.265L8 8.557z"></svg:path>`,
})
export class FluentRatingMature16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
