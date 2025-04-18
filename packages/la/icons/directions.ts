import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laDirectionsIcon],svg[la-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a3 3 0 0 0-2.125.875l-.125.156l-9.719 9.719l-.156.125a3.023 3.023 0 0 0 0 4.25l10 10a3.023 3.023 0 0 0 4.25 0l10-10a3.023 3.023 0 0 0 0-4.25l-10-10A3 3 0 0 0 16 3m0 2c.254 0 .52.082.719.281l10 10a1.015 1.015 0 0 1 0 1.438l-10 10a1.015 1.015 0 0 1-1.438 0l-10-10a1.015 1.015 0 0 1 0-1.438l10-10c.2-.199.465-.281.719-.281m1 6v3h-4a2 2 0 0 0-2 2v3h2v-3h4v3l4-4z"></svg:path>`,
})
export class LaDirectionsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
