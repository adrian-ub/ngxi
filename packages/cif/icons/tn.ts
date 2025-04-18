import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifTnIcon],svg[cif-tn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E70013" d="M.5.5h300v200H.5z"></svg:path><svg:circle cx="150.5" cy="100.5" r="50" fill="#FFF"></svg:circle><svg:circle cx="150.5" cy="100.5" r="37.5" fill="#E70013"></svg:circle><svg:circle cx="160.5" cy="100.5" r="30" fill="#FFF"></svg:circle><svg:path fill="#E70013" d="m138 100.5l40.703-13.225l-25.156 34.624V79.102l25.156 34.624z"></svg:path></svg:g>`,
})
export class CifTnIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
