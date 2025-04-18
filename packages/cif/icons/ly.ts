import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifLyIcon],svg[cif-ly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#239E46" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#000" d="M.5.5h300V113H.5z"></svg:path><svg:path fill="#E70013" d="M.5.5h300V38H.5z"></svg:path><svg:path fill="#FFF" d="M163.76 62.24c-7.323-5.226-17.496-3.526-22.722 3.798s-3.526 17.496 3.798 22.722a16.29 16.29 0 0 0 18.925 0c-7.323 7.321-19.195 7.32-26.516-.004c-7.322-7.323-7.32-19.195.004-26.516c7.32-7.32 19.189-7.32 26.511 0m-4.14 13.26l25.23-8.19l-15.6 21.45V62.24l15.6 21.45z"></svg:path></svg:g>`,
})
export class CifLyIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
