import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLouderIcon],svg[picon-louder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6q2-2 0-4m1 6q2-4 0-8q4 4 0 8M0 5V3h2l2-2v6L2 5"></svg:path>`,
})
export class PiconLouderIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
