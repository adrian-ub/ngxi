import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileListFilledIcon],svg[tdesign-mobile-list-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v4h-2V3H6v14h12v-2h2v8H4zm9.004 18H11v2.004h2.004z"></svg:path><svg:path fill="currentColor" d="M24 7H13v2h11zm-3 4h-8v2h8z"></svg:path>`,
})
export class TdesignMobileListFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
