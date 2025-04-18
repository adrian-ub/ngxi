import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNeumorphicCalculatorIcon],svg[arcticons-neumorphic-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4m14.5 0v37M5.5 24h37m-13.773-8.574h9M30.29 28.692l6 9m-25.034-8.37l8 7.937m-.039-8l-7.961 7.969m4-26.302v9m-4.5-4.5h9"></svg:path>`,
})
export class ArcticonsNeumorphicCalculatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
