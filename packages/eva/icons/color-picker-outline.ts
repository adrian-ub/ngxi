import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaColorPickerOutlineIcon],svg[eva-color-picker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.4 7.34L16.66 4.6A1.92 1.92 0 0 0 14 4.53l-2 2l-1.29-1.24a1 1 0 0 0-1.42 1.42L10.53 8L5 13.53a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l5.58-5.58l1.24 1.24a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-1.24-1.24l2-2a1.92 1.92 0 0 0-.07-2.71M9.08 17.62l-3 .28l.27-3L12 9.36l2.69 2.7Zm7-7L13.36 8l1.91-2L18 8.73Z"></svg:path>`,
})
export class EvaColorPickerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
