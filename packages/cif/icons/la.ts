import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifLaIcon],svg[cif-la-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CE1126" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#002868" d="M.5 50.5h300v100H.5z"></svg:path><svg:circle cx="150.5" cy="100.5" r="40" fill="#FFF"></svg:circle></svg:g>`,
})
export class CifLaIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
