import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFlag2Icon],svg[proicons-flag-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 15.182v6.07m0-6.07a7.5 7.5 0 0 1 7.25 0a7.5 7.5 0 0 0 6.936.164a.57.57 0 0 0 .314-.518V3.682a7.5 7.5 0 0 1-7.25 0a7.5 7.5 0 0 0-6.722-.265a.93.93 0 0 0-.528.855z"></svg:path>`,
})
export class ProiconsFlag2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
