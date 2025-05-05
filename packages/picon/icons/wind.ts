import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWindIcon],svg[picon-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 4l1-1h4V2H4l1-1l1 1v1L5 4M1 8l1-1h5V6H6l1-1l1 1v1L7 8"></svg:path>`,
})
export class PiconWindIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
