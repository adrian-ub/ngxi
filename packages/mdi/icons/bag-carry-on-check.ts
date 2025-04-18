import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBagCarryOnCheckIcon],svg[mdi-bag-carry-on-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.28 16.69l2.86-2.81l.7.7l-3.56 3.56L13.17 16l.71-.72zM8 21a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM9 7h5V4a2 2 0 0 1-2-2h4v8a6 6 0 0 1 6 6a6 6 0 0 1-6 6c-1.23 0-2.37-.37-3.32-1H9zm7 5a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiBagCarryOnCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
