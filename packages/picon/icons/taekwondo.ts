import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTaekwondoIcon],svg[picon-taekwondo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V5L1 4v1h1v1H0V4l3-3l2-1v1L3 2l1 1l3-3v1.5l-3 3V8M0 1c1-2 3 0 1 1"></svg:path>`,
})
export class PiconTaekwondoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
