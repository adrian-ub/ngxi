import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsVerticalBoldIcon],svg[ph-arrows-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168.49 191.51a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L116 203V53l-11.51 11.49a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L140 53v150l11.51-11.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhArrowsVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
