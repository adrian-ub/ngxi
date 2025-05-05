import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBoxerIcon],svg[picon-boxer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v5h4V4l1 3h3V2"></svg:path>`,
})
export class PiconBoxerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
