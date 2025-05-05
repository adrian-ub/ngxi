import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGuitarIcon],svg[picon-guitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v1h1V4m3-2L5 4q2 1-1 2c-1 5-7-1-2-2q1-3 2-1l2-2V0h2v2"></svg:path>`,
})
export class PiconGuitarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
