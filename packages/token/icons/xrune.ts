import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenXruneIcon],svg[token-xrune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.765 13.059L15.722 3l-3.198 7.941h3.711L8.352 21l3.171-7.941z"></svg:path>`,
})
export class TokenXruneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
