import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTuningIcon],svg[picon-tuning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h1v4q1.5 2 3 0V0h1v4c0 3-5 3-5 0m2 1h1v3H4"></svg:path>`,
})
export class PiconTuningIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
