import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFluent24RegularIcon],svg[fluent-fluent-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.915 2.082a.75.75 0 0 1 .67 0l6 3a.75.75 0 0 1 0 1.341l-4.658 2.33l4.658 2.329a.75.75 0 0 1 0 1.341L13 15.216v6.034a.75.75 0 0 1-1.149.635l-6-3.77a.75.75 0 0 1-.351-.634V5.752a.75.75 0 0 1 .415-.671zM7 6.216v10.85l4.5 2.827v-5.14a.75.75 0 0 1 .415-.671l4.658-2.33l-4.658-2.329a.75.75 0 0 1 0-1.341l4.658-2.33l-4.323-2.16z"></svg:path>`,
})
export class FluentFluent24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
