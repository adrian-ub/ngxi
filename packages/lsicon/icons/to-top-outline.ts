import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconToTopOutlineIcon],svg[lsicon-to-top-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 13h12M2 14h12m-6.021-.043v-11M11.5 6.228L7.979 2.707L4.457 6.228"></svg:path>`,
})
export class LsiconToTopOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
