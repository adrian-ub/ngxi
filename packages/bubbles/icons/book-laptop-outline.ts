import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesBookLaptopOutlineIcon],svg[bubbles-book-laptop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.5 3.001h17v12h-17z"></svg:path><svg:path d="M4.409 15a1.02 1.02 0 0 0-.883.5l-2.385 4a1 1 0 0 0 .883 1.5h19.952a1 1 0 0 0 .883-1.5l-2.385-4a1.02 1.02 0 0 0-.883-.5M9.5 19.001h5M12 6.7s.92-1.291 3.983-1.424a.5.5 0 0 1 .517.5v5.3a.5.5 0 0 1-.492.5C12.925 11.7 12 13 12 13zm0 0s-.92-1.291-3.983-1.424a.5.5 0 0 0-.517.5v5.3a.5.5 0 0 0 .492.5C11.075 11.7 12 13 12 13"></svg:path></svg:g>`,
})
export class BubblesBookLaptopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
