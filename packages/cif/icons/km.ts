import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifKmIcon],svg[cif-km-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFC61E" d="M.5.5h300v180H.5z"></svg:path><svg:path fill="#FFF" d="M.5 45.5h300v135H.5z"></svg:path><svg:path fill="#CE1126" d="M.5 90.5h300v90H.5z"></svg:path><svg:path fill="#3A75C4" d="M.5 135.5h300v45H.5z"></svg:path><svg:path fill="#3D8E33" d="m.5 180.5l150-90L.5.5z"></svg:path><svg:circle cx="51.5" cy="90.5" r="40.5" fill="#FFF"></svg:circle><svg:circle cx="69.5" cy="90.5" r="40.5" fill="#3D8E33"></svg:circle><svg:path fill="#FFF" d="M53.368 59.195h5.449l1.683-5.183l1.683 5.183h5.449l-4.408 3.202l1.683 5.182l-4.407-3.202l-4.408 3.202l1.683-5.182zm0 19.325h5.449l1.683-5.182l1.683 5.182h5.449l-4.408 3.202l1.683 5.183l-4.407-3.202l-4.408 3.202l1.683-5.183zm0 19.325h5.449l1.683-5.183l1.683 5.183h5.449l-4.408 3.202l1.683 5.183l-4.407-3.203l-4.408 3.203l1.683-5.183zm0 19.325h5.449l1.683-5.183l1.683 5.183h5.449l-4.408 3.202l1.683 5.183l-4.407-3.202l-4.408 3.202l1.683-5.183z"></svg:path></svg:g>`,
})
export class CifKmIcon {
  readonly viewBox = input("0 0 301 181")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
