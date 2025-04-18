import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHatGraduation32FilledIcon],svg[fluent-hat-graduation-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.386 4.685a4.5 4.5 0 0 0-4.772 0L2.518 11.623A1 1 0 0 0 2 12.5V21a1 1 0 1 0 2 0v-6.693l9.614 6.012a4.5 4.5 0 0 0 4.772 0l11.144-6.97a1 1 0 0 0 0-1.695zm.795 16.906L25 17.95v5.599a1 1 0 0 1-.273.686A11.97 11.97 0 0 1 16 28c-3.438 0-6.54-1.448-8.727-3.764A1 1 0 0 1 7 23.55v-5.598l5.819 3.638a6 6 0 0 0 6.362 0"></svg:path>`,
})
export class FluentHatGraduation32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
