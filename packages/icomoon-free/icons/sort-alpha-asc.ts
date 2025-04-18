import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSortAlphaAscIcon],svg[icomoon-free-sort-alpha-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12V0H3v12H.5L4 15.5L7.5 12zm9.5 4h-4a.5.5 0 0 1-.416-.777L13.566 10H10.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .416.777L11.434 15H14.5a.5.5 0 0 1 0 1m1.447-9.724l-3-6a.5.5 0 0 0-.894 0l-3 6a.5.5 0 0 0 .895.447l.862-1.724h3.382l.862 1.724a.5.5 0 0 0 .895-.447zM11.309 4L12.5 1.618L13.691 4z"></svg:path>`,
})
export class IcomoonFreeSortAlphaAscIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
