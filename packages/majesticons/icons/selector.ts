import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSelectorIcon],svg[majesticons-selector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12.707 4.293a1 1 0 0 0-1.414 0l-4 4A1 1 0 0 0 8 10h8a1 1 0 0 0 .707-1.707l-4-4zM8 14a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4A1 1 0 0 0 16 14H8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsSelectorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
