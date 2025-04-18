import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimClockThreeIcon],svg[uim-clock-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v4h2a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1"></svg:path><svg:path fill="currentColor" d="M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12m9-5a1 1 0 0 1 2 0v4h2a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1Z" opacity=".5"></svg:path>`,
})
export class UimClockThreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
