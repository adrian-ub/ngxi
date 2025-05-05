import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconClockIcon],svg[picon-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h4L5 3L4 0c5 0 5 8 0 8s-5-8 0-8"></svg:path>`,
})
export class PiconClockIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
