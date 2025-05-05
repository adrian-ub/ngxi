import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEngineIcon],svg[picon-engine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h4v1H5v1h1v1h1V3h1v3H7V5H6v2H4L3 6H2V5H1v1H0V2h1v1h2V2H2"></svg:path>`,
})
export class PiconEngineIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
