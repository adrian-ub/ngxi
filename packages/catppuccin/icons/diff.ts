import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinDiffIcon],svg[catppuccin-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#a6da95" d="M10 6H6m2-2v4"></svg:path><svg:path stroke="#ed8796" d="M10 11.5H6"></svg:path><svg:path stroke="#cad3f5" d="M6.1.5h3.8c1.44 0 2.6 1.09 2.6 2.43v10.14c0 1.34-1.16 2.43-2.6 2.43H6.1c-1.44 0-2.6-1.09-2.6-2.43V2.93C3.5 1.6 4.66.5 6.1.5"></svg:path></svg:g>`,
})
export class CatppuccinDiffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
