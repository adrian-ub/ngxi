import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPressureIcon],svg[picon-pressure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h2v3H3m0 1h2v1H3M2 1c-4 7 8 7 4 0l1-1q3 4-1 8L5 7L4 8L3 7L2 8q-4-4-1-8"></svg:path>`,
})
export class PiconPressureIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
