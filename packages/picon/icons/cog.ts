import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCogIcon],svg[picon-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0q0 3 2 1l1 2Q5 4 8 5L7 7Q5 5 5 8H3q0-3-2-1L0 5q3-1 0-2l1-2q2 2 2-1m0 5h2V3H3"></svg:path>`,
})
export class PiconCogIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
