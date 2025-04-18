import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifKpIcon],svg[cif-kp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#024FA2" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FFF" d="M.5 25.5h300v100H.5z"></svg:path><svg:path fill="#ED1C27" d="M.5 29.666h300v91.667H.5z"></svg:path><svg:circle cx="100.5" cy="75.5" r="33.333" fill="#FFF"></svg:circle><svg:path fill="#ED1C27" d="m69.789 65.521l18.98 13.79l-7.249 22.313l18.98-13.79l18.981 13.79l-7.25-22.313l18.98-13.79H107.75l-7.25-22.313l-7.25 22.313z"></svg:path></svg:g>`,
})
export class CifKpIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
