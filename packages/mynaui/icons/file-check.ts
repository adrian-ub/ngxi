import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFileCheckIcon],svg[mynaui-file-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.728 3H7.5a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h9a2.25 2.25 0 0 0 2.25-2.25V12M9.728 3C10.971 3 12 4.007 12 5.25V7.5a2.25 2.25 0 0 0 2.25 2.25h2.25A2.25 2.25 0 0 1 18.75 12M9.728 3c3.69 0 9.022 5.36 9.022 9"></svg:path><svg:path d="m10 16.242l1.039 1.181c.095.109.267.1.351-.016L13.5 14.5"></svg:path></svg:g>`,
})
export class MynauiFileCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
