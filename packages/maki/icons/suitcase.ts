import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiSuitcaseIcon],svg[maki-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 4V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2H12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1-2v2h4V2z"></svg:path>`,
})
export class MakiSuitcaseIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
