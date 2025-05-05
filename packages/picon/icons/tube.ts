import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTubeIcon],svg[picon-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1v4h2V1m1 0v5c0 3-4 3-4 0V1H1V0h6v1"></svg:path>`,
})
export class PiconTubeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
