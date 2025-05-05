import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAirhornIcon],svg[picon-airhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V4l1-1V1h2v2l1 1v4M1 2q6 0 7-2v5Q7 3 1 3"></svg:path>`,
})
export class PiconAirhornIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
