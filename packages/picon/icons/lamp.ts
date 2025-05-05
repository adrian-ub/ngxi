import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLampIcon],svg[picon-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6V4h1v2M2 8l1-1V4h2v3l1 1M0 4l2-4h4l2 4"></svg:path>`,
})
export class PiconLampIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
