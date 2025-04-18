import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifGrIcon],svg[cif-gr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path fill="#0D5EAF" fill-rule="nonzero" d="M.5.5h300v200H.5z"></svg:path><svg:path stroke="#FFF" stroke-width="20" d="M56.056.5v122.222M.5 56.055h111.111m0-22.222H300.5M111.611 78.278H300.5M.5 122.722h300M.5 167.167h300"></svg:path></svg:g>`,
})
export class CifGrIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
