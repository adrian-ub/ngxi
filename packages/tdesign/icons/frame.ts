import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFrameIcon],svg[tdesign-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v7h7V4zm9 0v7h7V4zm7 9h-7v7h7zm-9 7v-7H4v7z"></svg:path>`,
})
export class TdesignFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
