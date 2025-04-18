import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBoldIcon],svg[lineicons-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 2.75A.75.75 0 0 1 4.25 2h8.875a5.375 5.375 0 0 1 3.352 9.577A5.377 5.377 0 0 1 14.625 22H4.25a.75.75 0 0 1 0-1.5H5v-17h-.75a.75.75 0 0 1-.75-.75m3 8.5h6.625a3.875 3.875 0 0 0 0-7.75H6.5zm0 1.5v7.75h8.125a3.875 3.875 0 0 0 0-7.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBoldIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
