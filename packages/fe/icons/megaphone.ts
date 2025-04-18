import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feMegaphoneIcon],svg[fe-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 8l.04 2.117L19.5 6.065Q19.747 6 20.003 6C21.107 6 22 6.895 22 7.999V16q0 .256-.065.506a1.995 1.995 0 0 1-2.436 1.427L4 13.883V16a1 1 0 0 1-2 0V8a1 1 0 1 1 2 0m2 3.664v.68L20 16V8z"></svg:path>`,
})
export class FeMegaphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
