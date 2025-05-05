import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGroupIcon],svg[picon-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v2H5V6L4 4l1-1V1L4 0h3l1 1v2L7 4M1 4L0 3V1l1-1h2l1 1v2L3 4l1 2v2H0V6"></svg:path>`,
})
export class PiconGroupIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
