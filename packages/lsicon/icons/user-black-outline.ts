import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUserBlackOutlineIcon],svg[lsicon-user-black-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m11 11l3 3m-3 0l3-3M4 13a3 3 0 0 1 3-3h2q.492.002.937.15m-.357 4.157a6.5 6.5 0 1 1 4.757-4.852M10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path>`,
})
export class LsiconUserBlackOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
