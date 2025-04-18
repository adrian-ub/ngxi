import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phClosedCaptioningBoldIcon],svg[ph-closed-captioning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H36V68h184ZM52 128a44 44 0 0 1 66-38.11a12 12 0 0 1-12 20.78a20 20 0 1 0 0 34.66a12 12 0 1 1 12 20.77A44 44 0 0 1 52 128m80 0a44 44 0 0 1 66-38.11a12 12 0 0 1-12 20.78a20 20 0 1 0 0 34.66a12 12 0 1 1 12 20.77a44 44 0 0 1-66-38.1"></svg:path>`,
})
export class PhClosedCaptioningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
