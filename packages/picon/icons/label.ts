import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLabelIcon],svg[picon-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h2V1H1m3 7L0 4V0h4l4 4"></svg:path>`,
})
export class PiconLabelIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
