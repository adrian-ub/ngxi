import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBorderStyleDashedIcon],svg[gg-border-style-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h4v2H4zm6 0h4v2h-4zm10 0h-4v2h4z"></svg:path>`,
})
export class GgBorderStyleDashedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
