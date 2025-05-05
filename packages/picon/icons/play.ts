import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPlayIcon],svg[picon-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4L2 0v8"></svg:path>`,
})
export class PiconPlayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
