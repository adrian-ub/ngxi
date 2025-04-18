import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStopCircleThinIcon],svg[ph-stop-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m32-128H96a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-4 64h-56v-56h56Z"></svg:path>`,
})
export class PhStopCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
