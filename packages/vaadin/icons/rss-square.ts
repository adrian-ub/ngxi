import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinRssSquareIcon],svg[vaadin-rss-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm3.6 14c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6s1.6.7 1.6 1.6S4.6 14 3.6 14m4 0c0-3.1-2.5-5.6-5.6-5.6V6c4.4 0 8 3.6 8 8zm4 0c0-5.3-4.3-9.6-9.6-9.6V2c6.6 0 12 5.4 12 12z"></svg:path>`,
})
export class VaadinRssSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
