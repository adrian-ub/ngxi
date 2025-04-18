import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTruckIcon],svg[majesticons-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2h3a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 22 12v5a1 1 0 0 1-1 1h-1.17a3 3 0 1 0-5.659 0H9.829a3 3 0 1 0-5.659 0H3a1 1 0 0 1-1-1V5zm7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm8 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
