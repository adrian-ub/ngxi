import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaEditOutlineIcon],svg[eva-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71M9.08 17.62l-3 .28l.27-3L12 9.32l2.7 2.7ZM16 10.68L13.32 8l1.95-2L18 8.73Z"></svg:path>`,
})
export class EvaEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
