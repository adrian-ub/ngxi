import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLeafOne24RegularIcon],svg[fluent-leaf-one-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.238 3.272a1.75 1.75 0 0 0-2.475 0L7.05 6.984a6.999 6.999 0 0 0 4.2 11.906v2.359a.75.75 0 0 0 1.5 0V18.89a6.999 6.999 0 0 0 4.199-11.907zM12.75 17.38v-5.63a.75.75 0 0 0-1.5 0v5.63a5.499 5.499 0 0 1-3.138-9.336l3.711-3.711a.25.25 0 0 1 .354 0l3.711 3.711a5.499 5.499 0 0 1-3.138 9.336"></svg:path>`,
})
export class FluentLeafOne24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
