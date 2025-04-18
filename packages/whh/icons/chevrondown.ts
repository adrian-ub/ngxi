import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhChevrondownIcon],svg[whh-chevrondown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m577 608l426-434q21-21 21-51t-21-51l-51-51Q931 0 901 0t-51 21L512 359L174 21Q153 0 123 0T72 21L21 72Q0 93 0 123t21 51l428 434q32 32 64 32t64-32"></svg:path>`,
})
export class WhhChevrondownIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
