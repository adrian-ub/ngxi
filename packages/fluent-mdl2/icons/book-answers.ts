import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BookAnswersIcon],svg[fluent-mdl2-book-answers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 0h1408v2048H384q-53 0-99-20t-82-55t-55-81t-20-100V256q0-53 20-99t55-82t81-55T384 0m1280 1920v-256H384q-27 0-50 10t-40 27t-28 41t-10 50q0 27 10 50t27 40t41 28t50 10zm0-384V128H384q-27 0-50 10t-40 27t-28 41t-10 50v1314q60-34 128-34zm-768-256V640h128v640zm0-768V384h128v128z"></svg:path>`,
})
export class FluentMdl2BookAnswersIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
