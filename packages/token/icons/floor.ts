import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenFloorIcon],svg[token-floor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10.941h18v2.118H3z"></svg:path>`,
})
export class TokenFloorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
