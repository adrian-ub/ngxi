import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifItIcon],svg[cif-it-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#009246" d="M.5.5h100v200H.5z"></svg:path><svg:path fill="#FFF" d="M100.5.5h100v200h-100z"></svg:path><svg:path fill="#CE2B37" d="M200.5.5h100v200h-100z"></svg:path></svg:g>`,
})
export class CifItIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
