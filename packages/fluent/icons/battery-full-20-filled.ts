import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBatteryFull20FilledIcon],svg[fluent-battery-full-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M4.834 7.002A.835.835 0 0 0 4 7.838v4.326c0 .462.374.836.835.836h8.33a.835.835 0 0 0 .836-.836V7.838a.835.835 0 0 0-.835-.836h-8.33zM2 7.554a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v.833l1.167.002a.833.833 0 0 1 .833.833v1.667a.833.833 0 0 1-.833.834L16 11.72v.834a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.5-2.5v-5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentBatteryFull20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
