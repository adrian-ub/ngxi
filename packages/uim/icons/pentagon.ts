import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimPentagonIcon],svg[uim-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.562 21.56H6.437a1 1 0 0 1-.95-.692l-3.438-10.58a1 1 0 0 1 .363-1.117l9-6.54a1 1 0 0 1 1.176 0l9 6.54a1 1 0 0 1 .363 1.117l-3.437 10.58a1 1 0 0 1-.952.692"></svg:path>`,
})
export class UimPentagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
