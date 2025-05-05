import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconScriptIcon],svg[picon-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V2H1v2H0V0h7v5H3v2h1V6h4v2"></svg:path>`,
})
export class PiconScriptIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
