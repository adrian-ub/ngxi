import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconColonIcon],svg[picon-colon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3V2h1v1m0 3H4V5h1"></svg:path>`,
})
export class PiconColonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
