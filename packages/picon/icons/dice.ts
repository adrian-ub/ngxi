import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDiceIcon],svg[picon-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v3h1V4M4 5v1h3V5M4 4v3h3V4M0 6V.5l2 2V8m.5-6l-2-2H6l2 2M2.5 8V2.5H8V8"></svg:path>`,
})
export class PiconDiceIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
