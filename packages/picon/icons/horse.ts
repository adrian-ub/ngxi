import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHorseIcon],svg[picon-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3q1-3 2-3l2 1v1H6q2 2 0 3v3H5V5L3 6v2H2V6L1 4v1L0 6q0-3 2-3"></svg:path>`,
})
export class PiconHorseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
