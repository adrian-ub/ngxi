import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFastforwardIcon],svg[picon-fastforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4L4 0v8m0-4L0 0v8"></svg:path>`,
})
export class PiconFastforwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
