import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsReverbnationIcon],svg[simple-icons-reverbnation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 9.324l-9.143-.03L11.971.57L9.143 9.294L0 9.324h.031l7.367 5.355l-2.855 8.749h.029l7.459-5.386l7.396 5.386l-2.855-8.73L24 9.315"></svg:path>`,
})
export class SimpleIconsReverbnationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
