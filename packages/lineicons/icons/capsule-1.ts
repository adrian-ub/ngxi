import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCapsule1Icon],svg[lineicons-capsule-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.398 7.625a5.625 5.625 0 1 1 11.25 0v8.75a5.625 5.625 0 0 1-11.25 0zM12.023 3.5a4.125 4.125 0 0 0-4.125 4.125v3.625h8.25V7.625A4.125 4.125 0 0 0 12.023 3.5m4.125 9.25h-8.25v3.625a4.125 4.125 0 1 0 8.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCapsule1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
