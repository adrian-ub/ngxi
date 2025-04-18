import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDesktopFilledIcon],svg[tdesign-desktop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v15H13v2h4v2H7v-2h4v-2H1z"></svg:path>`,
})
export class TdesignDesktopFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
