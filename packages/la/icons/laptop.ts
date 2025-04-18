import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLaptopIcon],svg[la-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6v13.563l-2.281 2.312A2.45 2.45 0 0 0 2 23.594A2.417 2.417 0 0 0 4.406 26h23.188A2.417 2.417 0 0 0 30 23.594c0-.64-.266-1.266-.719-1.719L27 19.562V6zm2 2h18v11H7zm-.563 13h19.125l2.313 2.281a.47.47 0 0 1 .125.313a.385.385 0 0 1-.406.406H4.406A.385.385 0 0 1 4 23.594c0-.11.047-.235.125-.313z"></svg:path>`,
})
export class LaLaptopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
