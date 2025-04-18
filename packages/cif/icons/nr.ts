import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifNrIcon],svg[cif-nr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#002B7F" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FFC61E" d="M.5 69.25h300v12.5H.5z"></svg:path><svg:path fill="#FFF" d="m75.5 131.75l-3.235-12.926L63 128.4l3.661-12.812l-12.812 3.661l9.577-9.265L50.5 106.75l12.926-3.235l-9.577-9.265l12.812 3.661L63 85.1l9.265 9.576L75.5 81.75l3.235 12.926L88 85.1l-3.661 12.812l12.812-3.661l-9.577 9.265l12.926 3.234l-12.926 3.235l9.577 9.265l-12.812-3.661L88 128.4l-9.265-9.576z"></svg:path></svg:g>`,
})
export class CifNrIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
