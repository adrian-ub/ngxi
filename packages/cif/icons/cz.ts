import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifCzIcon],svg[cif-cz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D7141A" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#FFF" d="M.5.5h300v100H.5z"></svg:path><svg:path fill="#11457E" d="M150.5 100.5L.5.5v200z"></svg:path></svg:g>`,
})
export class CifCzIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
