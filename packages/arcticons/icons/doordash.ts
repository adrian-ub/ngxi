import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDoordashIcon],svg[arcticons-doordash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.481 35.037l-6.954.016l-7.833-8.374l15.082-.077a2.66 2.66 0 0 0 2.646-2.66h0a2.66 2.66 0 0 0-2.671-2.658l-19.51.087L4.5 12.947l27.958.003A11.044 11.044 0 0 1 43.5 23.994h0a11.044 11.044 0 0 1-11.019 11.043"></svg:path>`,
})
export class ArcticonsDoordashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
