import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MapPinSolidIcon],svg[fluent-mdl2-map-pin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 2048H0L384 896h512V634q-56-12-103-41t-81-70t-53-94t-19-109q0-66 25-124t68-101t102-69T960 0t124 25t101 69t69 102t26 124q0 57-19 109t-53 93t-81 71t-103 41v262h512zM768 320q0 40 15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75m256 704H896v480q0 9 7 15t18 10t21 5t18 2q7 0 17-1t21-5t18-10t8-16z"></svg:path>`,
})
export class FluentMdl2MapPinSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
