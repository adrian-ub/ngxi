import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarLineHorizontal320FilledIcon],svg[fluent-star-line-horizontal-3-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.898 2.9a1 1 0 0 0-1.794 0l-1.93 3.91l-4.317.628a1 1 0 0 0-.554 1.706l3.124 3.044l-.738 4.3a1 1 0 0 0 1.451 1.054l4.862-2.559V13.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1-.073-2.998zm1.604 7.1a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1zm-.5-2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 5.5a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class FluentStarLineHorizontal320FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
