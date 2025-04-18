import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideLayout20FilledIcon],svg[fluent-slide-layout-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7h9a.5.5 0 0 1 .5.5V9H5V7.5a.5.5 0 0 1 .5-.5M7 10v3H5.5a.5.5 0 0 1-.5-.5V10zm7.5 3H8v-3h7v2.5a.5.5 0 0 1-.5.5m-10-9A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zm10 10h-9A1.5 1.5 0 0 1 4 12.5v-5A1.5 1.5 0 0 1 5.5 6h9A1.5 1.5 0 0 1 16 7.5v5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class FluentSlideLayout20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
