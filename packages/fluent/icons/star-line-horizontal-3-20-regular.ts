import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarLineHorizontal320RegularIcon],svg[fluent-star-line-horizontal-3-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.104 2.9a1 1 0 0 1 1.794 0L12.922 7H17.5a.5.5 0 1 1 0 1h-4.58a1 1 0 0 1-.896-.557L10 3.342L8.07 7.253a1 1 0 0 1-.753.547L3 8.428l3.124 3.044a1 1 0 0 1 .287.885l-.737 4.3l4.093-2.153a.5.5 0 0 1 .466.886L6.14 17.542a1 1 0 0 1-1.45-1.055l.737-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627zM12 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentStarLineHorizontal320RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
