import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPlungerIcon],svg[picon-plunger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7C0 3 8 3 7 7M3 6V0h2v6M0 8V7h8v1"></svg:path>`,
})
export class PiconPlungerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
