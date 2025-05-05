import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPistonIcon],svg[picon-piston-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3l3-3l3 3l-3 3V5l2-2l-2-2l-2 2m0 3v1L1 8L0 7l1-2h1l3-3l1 1M1 6v1h1V6"></svg:path>`,
})
export class PiconPistonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
