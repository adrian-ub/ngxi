import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifQaIcon],svg[cif-qa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D1B3D" d="M.5.445h300v118.11H.5z"></svg:path><svg:path fill="#FFF" d="M.5.445v118.11h94.488l24.003-6.558l-24.003-6.57l24.003-6.558l-24.003-6.558l24.003-6.57l-24.003-6.558l24.003-6.558l-24.003-6.57l24.003-6.558l-24.003-6.558l24.003-6.57l-24.003-6.558l24.003-6.558l-24.003-6.57l24.003-6.558l-24.003-6.558l24.003-6.57L94.988.439H.5z"></svg:path></svg:g>`,
})
export class CifQaIcon {
  readonly viewBox = input("0 0 301 119")
  readonly width = input("2.53em")
  readonly height = input("1em")
}
