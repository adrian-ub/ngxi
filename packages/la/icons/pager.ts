import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPagerIcon],svg[la-pager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7c-1.645 0-3 1.355-3 3v12c0 1.645 1.355 3 3 3h18c1.645 0 3-1.355 3-3V10c0-1.645-1.355-3-3-3zm0 2h18c.565 0 1 .435 1 1v12c0 .565-.435 1-1 1H7c-.565 0-1-.435-1-1V10c0-.565.435-1 1-1m1 2v6h12v-6zm14 0v2h2v-2zm0 4v2h2v-2zM8 19v2h12v-2zm14 0v2h2v-2z"></svg:path>`,
})
export class LaPagerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
