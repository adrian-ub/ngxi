import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPagebreakIcon],svg[picon-pagebreak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3V0h6v3M2 0v2h4V0M0 5V4h2v1m1 0V4h2v1m1 0V4h2v1M1 8V6h6v2M2 7v1h4V7"></svg:path>`,
})
export class PiconPagebreakIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
