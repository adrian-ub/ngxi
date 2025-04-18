import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifScIcon],svg[cif-sc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D62828" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FCD856" d="M.5.5h200l-200 150z"></svg:path><svg:path fill="#FFF" d="M300.5 50.5v100H.5z"></svg:path><svg:path fill="#003F87" d="M.5.5h100l-100 150z"></svg:path><svg:path fill="#007A3D" d="M.5 150.5h300v-50z"></svg:path></svg:g>`,
})
export class CifScIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
