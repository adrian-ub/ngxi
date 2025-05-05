import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCowboyIcon],svg[picon-cowboy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3q4 2 8 0L6 5Q4 6 2 5m2-3q2-3 2 1q-2 1-4 0q0-4 2-1"></svg:path>`,
})
export class PiconCowboyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
