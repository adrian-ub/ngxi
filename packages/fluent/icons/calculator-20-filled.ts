import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalculator20FilledIcon],svg[fluent-calculator-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 2h-7A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 2m-6 2h5A1.5 1.5 0 0 1 14 5.5v1A1.5 1.5 0 0 1 12.5 8h-5A1.5 1.5 0 0 1 6 6.5v-1A1.5 1.5 0 0 1 7.5 4m.5 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentCalculator20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
