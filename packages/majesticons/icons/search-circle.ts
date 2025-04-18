import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSearchCircleIcon],svg[majesticons-search-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm-1 5a4 4 0 1 0 2.032 7.446l1.76 1.761a1 1 0 0 0 1.415-1.414l-1.761-1.761A4 4 0 0 0 11 7zm0 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsSearchCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
