import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCoffeeIcon],svg[picon-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v1h1V2M0 8V7h7v1M1 6V1h4c3 0 3 3 0 3v2"></svg:path>`,
})
export class PiconCoffeeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
