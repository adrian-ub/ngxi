import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGuiIcon],svg[picon-gui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H6v4h1M1 4v2h4V4M1 2v1h4V2M0 7V0h8v7"></svg:path>`,
})
export class PiconGuiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
