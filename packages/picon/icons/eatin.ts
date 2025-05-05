import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEatinIcon],svg[picon-eatin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3V2h4v1M1 5v2H0V1h1v3h2v3H2V5m3 2V4h2V1h1v6H7V5H6v2"></svg:path>`,
})
export class PiconEatinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
