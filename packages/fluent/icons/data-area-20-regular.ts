import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataArea20RegularIcon],svg[fluent-data-area-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2a.5.5 0 0 1 .5.5v6.23l3.797-1.687a.5.5 0 0 1 .451.023l3.205 1.831l4.735-3.787A.5.5 0 0 1 16 5.5V17h1.5a.5.5 0 0 1 0 1h-13A2.5 2.5 0 0 1 2 15.5v-13a.5.5 0 0 1 .5-.5M15 17V6.54l-4.188 3.35a.5.5 0 0 1-.56.044L6.972 8.06L3 9.825V15.5A1.5 1.5 0 0 0 4.5 17z"></svg:path>`,
})
export class FluentDataArea20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
