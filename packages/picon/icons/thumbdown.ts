import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconThumbdownIcon],svg[picon-thumbdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V1h1v4m3 0l1 3H4L2 5V1q6-1 5 4"></svg:path>`,
})
export class PiconThumbdownIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
