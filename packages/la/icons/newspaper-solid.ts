import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laNewspaperSolidIcon],svg[la-newspaper-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v18c0 2.21 1.79 4 4 4h18c2.21 0 4-1.79 4-4V12h-6V5zm2 2h16v16c0 .73.223 1.41.563 2H7c-1.191 0-2-.809-2-2zm2 2v5h12V9zm2 2h8v1H9zm14 3h4v9c0 1.191-.809 2-2 2s-2-.809-2-2zM7 15v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm7 0v2h5v-2z"></svg:path>`,
})
export class LaNewspaperSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
