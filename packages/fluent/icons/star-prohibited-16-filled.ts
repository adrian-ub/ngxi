import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarProhibited16FilledIcon],svg[fluent-star-prohibited-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.808 2.101a.9.9 0 0 0-1.614 0L5.673 5.183l-3.401.495a.9.9 0 0 0-.5 1.535l2.462 2.399l-.581 3.387a.9.9 0 0 0 1.306.949l.91-.479a5.5 5.5 0 0 1 4.372-8.464zM6 10.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.5 3.5 0 0 1 7 10.499m3.5 3.5a3.5 3.5 0 0 1-2.096-.696l4.9-4.9A3.5 3.5 0 0 1 10.5 14"></svg:path>`,
})
export class FluentStarProhibited16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
