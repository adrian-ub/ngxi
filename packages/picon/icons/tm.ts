import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTmIcon],svg[picon-tm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4V1h1l1 1l1-1h1v3H7V2L6 3L5 2v2M1 4V2H0V1h3v1H2v2"></svg:path>`,
})
export class PiconTmIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
