import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifAgIcon],svg[cif-ag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M.5.5h300v78.261H.5z"></svg:path><svg:path fill="#0072C6" d="M.5 78.761h300v43.478H.5z"></svg:path><svg:path fill="#CE1126" d="M.5.5v200h300V.5l-150 200z"></svg:path><svg:path fill="#FFF" d="m150.5 200.5l-58.695-78.261h117.391z"></svg:path><svg:path fill="#FCD116" d="m183.109 72.274l27.644-18.471l-32.609 6.486l18.472-27.644l-27.645 18.471l6.487-32.608l-18.472 27.644l-6.486-32.609l-6.486 32.609l-18.471-27.644l6.486 32.608l-27.645-18.471l18.472 27.644l-32.609-6.486l27.644 18.471l-32.608 6.487h130.435z"></svg:path></svg:g>`,
})
export class CifAgIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
