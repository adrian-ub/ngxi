import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBreadIcon],svg[openmoji-bread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f1b31c" d="M33 17h29a5 5 0 0 1 5 5c0 1.636-.797 3.075-2.012 3.987a2 2 0 0 0-.299.217c-.42.366-.689.898-.689 1.5V53a2 2 0 0 1-2 2H33a2 2 0 0 0 2-2V27.703c0-.6.27-1.133.69-1.499q.136-.123.298-.217C37.203 25.075 38 23.636 38 22a5 5 0 0 0-5-5"></svg:path><svg:path fill="#fcea2b" d="M33 17a5 5 0 0 1 5 5c0 1.636-.797 3.075-2.012 3.987a2 2 0 0 0-.298.217c-.42.366-.69.898-.69 1.5V53a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V27.703c0-.6-.27-1.133-.69-1.499a2 2 0 0 0-.298-.217C5.797 25.075 5 23.636 5 22a5 5 0 0 1 5-5z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M33 17a5 5 0 0 1 5 5c0 1.636-.797 3.075-2.012 3.987a2 2 0 0 0-.298.217c-.42.366-.69.898-.69 1.5V53a2 2 0 0 1-2 2"></svg:path><svg:path d="M10 17h52a5 5 0 0 1 5 5c0 1.636-.797 3.075-2.012 3.987a2 2 0 0 0-.299.217c-.42.366-.689.898-.689 1.5V53a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V27.703c0-.6-.27-1.133-.69-1.499a2 2 0 0 0-.298-.217C5.797 25.075 5 23.636 5 22a5 5 0 0 1 5-5"></svg:path></svg:g>`,
})
export class OpenmojiBreadIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
