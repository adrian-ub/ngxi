import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciPaperclipAttechmentHorizontalIcon],svg[ci-paperclip-attechment-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6h9.75a5.25 5.25 0 1 1 0 10.5H5.5a3.5 3.5 0 1 1 0-7h11.25a1.75 1.75 0 1 1 0 3.5H7"></svg:path>`,
})
export class CiPaperclipAttechmentHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
