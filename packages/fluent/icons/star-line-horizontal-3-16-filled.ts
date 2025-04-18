import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarLineHorizontal316FilledIcon],svg[fluent-star-line-horizontal-3-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.808 2.101a.9.9 0 0 0-1.614 0L5.673 5.183l-3.401.495a.9.9 0 0 0-.5 1.535l2.462 2.399l-.581 3.387a.9.9 0 0 0 1.306.949L8 12.348l.482.254A1.5 1.5 0 0 1 9.5 10a1.5 1.5 0 1 1 0-3a1.5 1.5 0 1 1 0-3h.245zM9.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class FluentStarLineHorizontal316FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
