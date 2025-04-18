import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeHtmlFiveIcon],svg[icomoon-free-html-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.946 0L2.23 14.4L7.992 16l5.777-1.602L15.055 0zM12.26 4.71H5.502l.161 1.809H12.1l-.485 5.422l-3.623 1.004l-3.618-1.004l-.247-2.774H5.9l.126 1.41l1.967.53l.004-.001l1.968-.531l.204-2.29H4.048l-.476-5.341h8.847l-.158 1.766z"></svg:path>`,
})
export class IcomoonFreeHtmlFiveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
