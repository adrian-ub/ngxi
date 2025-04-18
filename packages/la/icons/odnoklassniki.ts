import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laOdnoklassnikiIcon],svg[la-odnoklassniki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8.328a2.354 2.354 0 0 1 2.352 2.352A2.353 2.353 0 0 1 15 13.027a2.353 2.353 0 0 1-2.352-2.347A2.354 2.354 0 0 1 15 8.328m0 8.027a5.684 5.684 0 0 0 5.68-5.675A5.685 5.685 0 0 0 15 5a5.68 5.68 0 0 0-5.676 5.68A5.68 5.68 0 0 0 15 16.355m2.297 4.633a10.7 10.7 0 0 0 3.297-1.367a1.664 1.664 0 1 0-1.774-2.816a7.22 7.22 0 0 1-7.644 0a1.664 1.664 0 0 0-1.77 2.816a10.7 10.7 0 0 0 3.297 1.367L9.527 24.16a1.664 1.664 0 0 0 2.356 2.352L15 23.395l3.121 3.117c.649.652 1.7.652 2.352 0a1.664 1.664 0 0 0 0-2.352z"></svg:path>`,
})
export class LaOdnoklassnikiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
