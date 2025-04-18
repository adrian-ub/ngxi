import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsPearIcon],svg[bxs-pear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.12 22a7.71 7.71 0 0 0 6.57-5a7.2 7.2 0 0 0 .46-3.21a3.26 3.26 0 0 1 1-2.57l.61-.61A3.89 3.89 0 0 0 19.43 6l2.28-2.28l-1.42-1.43L18 4.55a3.82 3.82 0 0 0-4.66.57l-.75.75a3.22 3.22 0 0 1-2.52 1a7.05 7.05 0 0 0-3.32.57A7.75 7.75 0 0 0 2 14.11A7.59 7.59 0 0 0 10.12 22M9.5 9.25v1.5a3.75 3.75 0 0 0-3.75 3.75h-1.5A5.26 5.26 0 0 1 9.5 9.25"></svg:path>`,
})
export class BxsPearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
