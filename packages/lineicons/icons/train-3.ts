import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrain3Icon],svg[lineicons-train-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 15.063a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m7.25-1.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" d="M6.125 3.25a2.25 2.25 0 0 0-2.25 2.25v11.75a2.25 2.25 0 0 0 2.25 2.25h.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.28-2.28h6.13l2.28 2.28a.75.75 0 1 0 1.06-1.06l-1.22-1.22h.69a2.25 2.25 0 0 0 2.25-2.25V5.5a2.25 2.25 0 0 0-2.25-2.25zm12.5 7.375H12.75V4.75h5.125a.75.75 0 0 1 .75.75zM11.25 4.75v5.875H5.375V5.5a.75.75 0 0 1 .75-.75zm-5.875 7.375h13.25v5.125a.75.75 0 0 1-.75.75H6.125a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsTrain3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
