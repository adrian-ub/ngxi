import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCpuIcon],svg[picon-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V6l8-1v1M0 5V4l8-1v1M6 0l1 8H6L5 0M4 0l1 8H4L3 0M2 0l1 8H2L1 0M0 3V2l8-1v1M7 7H1V1h6"></svg:path>`,
})
export class PiconCpuIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
