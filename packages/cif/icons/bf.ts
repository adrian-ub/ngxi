import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifBfIcon],svg[cif-bf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#009E49" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#EF2B2D" d="M.5.5h300v100H.5z"></svg:path><svg:path fill="#FCD116" d="m118.798 90.199l19.593 14.235l-7.484 23.033l19.593-14.235l19.593 14.235l-7.484-23.033l19.593-14.235h-24.218L150.5 67.166l-7.374 23.033z"></svg:path></svg:g>`,
})
export class CifBfIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
