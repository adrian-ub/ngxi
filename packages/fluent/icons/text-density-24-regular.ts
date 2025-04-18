import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDensity24RegularIcon],svg[fluent-text-density-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 2a.75.75 0 0 1 .75.75v18.5a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75M10 5H2.75a.75.75 0 0 0 0 1.5H10zm0 4H2.75a.75.75 0 0 0 0 1.5H10zm0 4H2.75a.75.75 0 0 0 0 1.5H10zm0 4H2.75a.75.75 0 0 0 0 1.5H10zm9.75 1H14.5v-1.5h5.25a.75.75 0 0 0 0-1.5H14.5v-1.5h5.25a2.25 2.25 0 0 1 0 4.5m0-7.5H14.5V9h5.25a.75.75 0 0 0 0-1.5H14.5V6h5.25a2.25 2.25 0 0 1 0 4.5"></svg:path>`,
})
export class FluentTextDensity24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
