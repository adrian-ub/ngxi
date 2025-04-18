import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapNavigationFilledIcon],svg[tdesign-map-navigation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v3h10V2h2v3h2v2h-2v8h2v2h-2v4h-2v-4h-2v-2h2V7H8v4H6V7H2V5h4V2zm6.58 8.419l-4.375 13.126l-3.008-5.743l-5.743-3.008z"></svg:path>`,
})
export class TdesignMapNavigationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
