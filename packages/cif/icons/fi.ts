import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifFiIcon],svg[cif-fi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M.5.833h300v183.333H.5z"></svg:path><svg:path fill="#003580" d="M.5 67.5h300v50H.5z"></svg:path><svg:path fill="#003580" d="M83.834.833h50v183.333h-50z"></svg:path></svg:g>`,
})
export class CifFiIcon {
  readonly viewBox = input("0 0 301 185")
  readonly width = input("1.63em")
  readonly height = input("1em")
}
