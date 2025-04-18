import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFahrenheitIcon],svg[streamline-fahrenheit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 3.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4.5 10v-12h6M7 7h4"></svg:path>`,
})
export class StreamlineFahrenheitIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
