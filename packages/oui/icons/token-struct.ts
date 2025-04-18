import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenStructIcon],svg[oui-token-struct-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.336 4.667h2.667v2.666H4.336zm0 4h2.667v2.666H4.336zm4-4h2.667v2.666H8.336zm0 4h2.667v2.666H8.336zM3.003 3.333v9.334h9.333V3.333zm0-1.333h9.333c.737 0 1.334.597 1.334 1.333v9.334c0 .736-.597 1.333-1.334 1.333H3.003a1.333 1.333 0 0 1-1.333-1.333V3.333C1.67 2.597 2.267 2 3.003 2"></svg:path>`,
})
export class OuiTokenStructIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
