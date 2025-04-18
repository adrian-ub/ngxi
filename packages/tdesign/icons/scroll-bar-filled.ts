import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignScrollBarFilledIcon],svg[tdesign-scroll-bar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20h-2V2zM2 2h16v20H2z"></svg:path>`,
})
export class TdesignScrollBarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
