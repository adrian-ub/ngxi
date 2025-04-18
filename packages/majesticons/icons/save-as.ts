import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSaveAsIcon],svg[majesticons-save-as-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M6 8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V8zm-2 .17A3.001 3.001 0 0 0 2 11v7a3 3 0 0 0 3 3h10a3.001 3.001 0 0 0 2.83-2H9a5 5 0 0 1-5-5V8.17zM14 3a1 1 0 0 1 1 1v5.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L13 9.586V4a1 1 0 0 1 1-1z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsSaveAsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
