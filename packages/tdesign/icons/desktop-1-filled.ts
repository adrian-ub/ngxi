import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDesktop1FilledIcon],svg[tdesign-desktop-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v11h22zm0 13H1v3h10v1H7v2h10v-2h-4v-1h10z"></svg:path>`,
})
export class TdesignDesktop1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
