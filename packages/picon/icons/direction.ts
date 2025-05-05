import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDirectionIcon],svg[picon-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v3h1V4h1v1l2-1l-2-2M0 4l4-4l4 4l-4 4"></svg:path>`,
})
export class PiconDirectionIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
