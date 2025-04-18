import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBook3LineIcon],svg[ri-book-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1zM5 18a2 2 0 0 0 2 2h12V10H7a4 4 0 0 1-2-.535zM20 7H7a1 1 0 0 1 0-2h13z"></svg:path>`,
})
export class RiBook3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
