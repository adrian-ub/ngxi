import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPauseCircleBoldIcon],svg[ph-pause-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84M116 96v64a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0m48 0v64a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhPauseCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
