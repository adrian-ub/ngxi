import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenShapeIcon],svg[oui-token-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 10v3h-3v-1H6v1H3v-3h1V6H3V3h3v1h4V3h3v3h-1v4zm-8 1H4v1h1zm7 0h-1v1h1zM5 4H4v1h1zm7 0h-1v1h1zm-1 2h-1V5H6v1H5v4h1v1h4v-1h1z"></svg:path>`,
})
export class OuiTokenShapeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
