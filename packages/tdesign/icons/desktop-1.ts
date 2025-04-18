import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDesktop1Icon],svg[tdesign-desktop-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v16H13v1h4v2H7v-2h4v-1H1zm2 2v9h18V5zm18 11H3v1h18z"></svg:path>`,
})
export class TdesignDesktop1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
