import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTruckLineIcon],svg[majesticons-truck-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h3V8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3V8z"></svg:path><svg:path d="M12 9a1 1 0 0 1 1-1h4a1 1 0 0 1 .707.293l3.414 3.414A3 3 0 0 1 22 13.828V14a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1v-.172a1 1 0 0 0-.293-.707L16.586 10H14v5h1a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1V9zm-5 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0z"></svg:path><svg:path d="M17 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0z"></svg:path></svg:g>`,
})
export class MajesticonsTruckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
