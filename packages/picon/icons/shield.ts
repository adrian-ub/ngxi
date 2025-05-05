import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShieldIcon],svg[picon-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v3q2 0 3-3M4 4V1L1 2v2m3-4l4 2c0 8-8 8-8 0"></svg:path>`,
})
export class PiconShieldIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
