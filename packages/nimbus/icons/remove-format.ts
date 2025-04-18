import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusRemoveFormatIcon],svg[nimbus-remove-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.03 2.49l.19-1.25h3.06L7.7 5.16l1.09 1.09l.75-5.01h3.07l-.18 1.15l1.23.19l.39-2.58h-9.9l-.21 1.4zm3.53 5.29l-1.09-1.1l-4.64-4.63l-.88.87l5.29 5.29l-.97 6.45H4.05v1.25h2.66l.62.09l.01-.09h2.23v-1.25H7.53l.8-5.36l4.56 4.56l.88-.88z"></svg:path>`,
})
export class NimbusRemoveFormatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
