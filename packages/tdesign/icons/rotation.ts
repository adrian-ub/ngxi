import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRotationIcon],svg[tdesign-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v9a9 9 0 0 1 9 9h9v2H2V2zm0 18h7a7 7 0 0 0-7-7z"></svg:path>`,
})
export class TdesignRotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
