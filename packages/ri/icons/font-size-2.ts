import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFontSize2Icon],svg[ri-font-size-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6v15H8V6H2V4h14v2zm8 8v7h-2v-7h-3v-2h8v2z"></svg:path>`,
})
export class RiFontSize2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
