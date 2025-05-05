import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconConstructionIcon],svg[picon-construction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h1q0-3 1-4l1 3V1h2v3l1-3q1 1 1 4h1v1H0"></svg:path>`,
})
export class PiconConstructionIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
