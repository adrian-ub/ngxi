import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBackpackIcon],svg[picon-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V4c0-4 6-4 6 0v4M2 5v1h3v1h1V5M3 2H2V0h1m2 2V0h1v2"></svg:path>`,
})
export class PiconBackpackIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
