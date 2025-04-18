import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifCoIcon],svg[cif-co-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FCD116" d="M.5.5h300v100H.5z"></svg:path><svg:path fill="#003893" d="M.5 100.5h300v50H.5z"></svg:path><svg:path fill="#CE1126" d="M.5 150.5h300v50H.5z"></svg:path></svg:g>`,
})
export class CifCoIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
