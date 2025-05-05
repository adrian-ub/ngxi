import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCatIcon],svg[picon-cat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v1h1V3M2 3v1h1V3m5 2c0 4-8 4-8 0V0l2 2h4l2-2"></svg:path>`,
})
export class PiconCatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
