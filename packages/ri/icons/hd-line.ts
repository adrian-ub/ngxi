import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHdLineIcon],svg[ri-hd-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.5 8.25h2V9H11v6H9.5v-2.25h-2V15H6V9h1.5zm7-.75v3H16a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM13 9h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3z"></svg:path>`,
})
export class RiHdLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
