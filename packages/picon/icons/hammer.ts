import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHammerIcon],svg[picon-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7L7 8L2 3v2L0 3l2-1q1-2 5-1q-4 0-3 2"></svg:path>`,
})
export class PiconHammerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
