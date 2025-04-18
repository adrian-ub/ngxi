import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHomeSmile2LineIcon],svg[ri-home-smile-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V9.799l-7-5.522l-7 5.522V19zm2 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.311a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.786zM7 12h2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0"></svg:path>`,
})
export class RiHomeSmile2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
