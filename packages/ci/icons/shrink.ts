import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciShrinkIcon],svg[ci-shrink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14h5v5m9-9h-5V5"></svg:path>`,
})
export class CiShrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
