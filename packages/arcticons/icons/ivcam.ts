import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvcamIcon],svg[arcticons-ivcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="20" r="15.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="20" r="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="28.572" cy="15.174" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 38.182c-3.035 0-5.784.344-7.894.953c-1.055.304-1.954.67-2.676 1.163s-1.328 1.2-1.328 2.062c0 .63.615 1.14 1.373 1.14h21.05c.758 0 1.373-.51 1.373-1.14c0-.862-.606-1.57-1.328-2.062s-1.622-.859-2.676-1.163c-2.11-.61-4.859-.953-7.894-.953"></svg:path>`,
})
export class ArcticonsIvcamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
