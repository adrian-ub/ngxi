import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSdCardIcon],svg[tdesign-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1h16v22H3V11.586l2-2zm2 2v7.414l-2 2V21h14V3zm4 2v3H9V5zm3 0v3h-2V5zm3 0v3h-2V5z"></svg:path>`,
})
export class TdesignSdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
