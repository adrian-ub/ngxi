import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconThumbupIcon],svg[picon-thumbup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V3h1v4m1-4l1-3h1v3h3q1 5-5 4"></svg:path>`,
})
export class PiconThumbupIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
