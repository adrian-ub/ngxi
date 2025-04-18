import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMenuEndwaysOutlineIcon],svg[lsicon-menu-endways-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 2v12m3-12v12m3-12v12m-9-12v12"></svg:path>`,
})
export class LsiconMenuEndwaysOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
