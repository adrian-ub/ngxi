import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifBoIcon],svg[cif-bo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#007934" d="M.5.227h300v204.545H.5z"></svg:path><svg:path fill="#F9E300" d="M.5.227h300v136.364H.5z"></svg:path><svg:path fill="#D52B1E" d="M.5.227h300v68.182H.5z"></svg:path></svg:g>`,
})
export class CifBoIcon {
  readonly viewBox = input("0 0 301 205")
  readonly width = input("1.47em")
  readonly height = input("1em")
}
