import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPillIcon],svg[picon-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2c4-4 7-1 3 3L5 6c-4 4-7 1-3-3m3 2c4-4 2-6-2-2"></svg:path>`,
})
export class PiconPillIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
