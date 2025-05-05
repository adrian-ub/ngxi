import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHandle2Icon],svg[picon-handle2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v2h2V6M3 3v2h2V3m1-3v2h2V0M6 3v2h2V3M6 6v2h2V6M0 6v2h2V6"></svg:path>`,
})
export class PiconHandle2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
