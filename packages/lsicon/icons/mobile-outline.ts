import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMobileOutlineIcon],svg[lsicon-mobile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6.5 12.5h3m3-11v13h-9v-13z"></svg:path>`,
})
export class LsiconMobileOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
