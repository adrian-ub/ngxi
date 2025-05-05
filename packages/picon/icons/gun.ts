import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGunIcon],svg[picon-gun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h7v1H4v1L2 5v2H0m2-3h1V3H2"></svg:path>`,
})
export class PiconGunIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
