import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCrateIcon],svg[picon-crate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V1h1v5h6V1h1v7M1 5V3h6v2"></svg:path>`,
})
export class PiconCrateIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
