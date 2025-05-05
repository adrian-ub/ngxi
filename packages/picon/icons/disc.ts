import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDiscIcon],svg[picon-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m2 0l2 2l2-2l-2-2m0 3L3 4l1-1l1 1"></svg:path>`,
})
export class PiconDiscIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
