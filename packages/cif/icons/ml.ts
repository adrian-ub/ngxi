import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifMlIcon],svg[cif-ml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#14B53A" d="M.5.5h100v200H.5z"></svg:path><svg:path fill="#FCD116" d="M100.5.5h100v200h-100z"></svg:path><svg:path fill="#CE1126" d="M200.5.5h100v200h-100z"></svg:path></svg:g>`,
})
export class CifMlIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
