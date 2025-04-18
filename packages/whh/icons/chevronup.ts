import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhChevronupIcon],svg[whh-chevronup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m577 32l426 434q21 21 21 51t-21 51l-51 51q-21 21-51 21t-51-21L512 281L174 619q-21 21-51 21t-51-21l-51-51Q0 547 0 517t21-51L449 32q32-32 64-32t64 32"></svg:path>`,
})
export class WhhChevronupIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
