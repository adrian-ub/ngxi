import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatHoleIcon],svg[fluent-emoji-flat-hole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="M16 30.064c7.732 0 14-3.506 14-7.974S23.732 14 16 14S2 17.622 2 22.09s6.268 7.974 14 7.974"></svg:path><svg:path fill="#321B41" d="M16 30.11c7.185 0 13.01-3.138 13.01-7.01S23.185 16.09 16 16.09S2.99 19.23 2.99 23.1S8.815 30.11 16 30.11"></svg:path></svg:g>`,
})
export class FluentEmojiFlatHoleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
