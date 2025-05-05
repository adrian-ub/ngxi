import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLighterIcon],svg[picon-lighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4L0 2l1-1l2 2m0 5V3h2v1h1v4M4 3c3-4-3-4 0 0c-1-3 1-3 0 0"></svg:path>`,
})
export class PiconLighterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
