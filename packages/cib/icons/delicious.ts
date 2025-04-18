import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibDeliciousIcon],svg[cib-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16H0v16h16zM32 0H16v16h16z"></svg:path>`,
})
export class CibDeliciousIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
