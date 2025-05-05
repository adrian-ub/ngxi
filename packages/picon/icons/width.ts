import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWidthIcon],svg[picon-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3V1L0 4l3 3V5h2v2l3-3l-3-3"></svg:path>`,
})
export class PiconWidthIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
