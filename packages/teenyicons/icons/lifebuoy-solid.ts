import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLifebuoySolidIcon],svg[teenyicons-lifebuoy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.404 4.697L2.562 1.855a7.5 7.5 0 0 1 9.876 0L9.596 4.697a3.5 3.5 0 0 0-4.192 0m4.899.707a3.5 3.5 0 0 1 0 4.192l2.842 2.842a7.5 7.5 0 0 0 0-9.876zm-.707 4.899a3.5 3.5 0 0 1-4.192 0l-2.842 2.842a7.5 7.5 0 0 0 9.876 0zM4.697 5.404a3.5 3.5 0 0 0 0 4.192l-2.842 2.842a7.5 7.5 0 0 1 0-9.876z"></svg:path>`,
})
export class TeenyiconsLifebuoySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
