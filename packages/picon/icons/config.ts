import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconConfigIcon],svg[picon-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8V0h2v8M1 8V0h2v8m1-1V5h4v2M0 4V2h4v2"></svg:path>`,
})
export class PiconConfigIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
