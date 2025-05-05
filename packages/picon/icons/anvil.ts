import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAnvilIcon],svg[picon-anvil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7V6q4-1 1-3V1h6v2Q5 4 8 6v1M1.5 1.5V3Q1 3 0 1.5"></svg:path>`,
})
export class PiconAnvilIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
