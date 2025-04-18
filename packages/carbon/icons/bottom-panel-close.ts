import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBottomPanelCloseIcon],svg[carbon-bottom-panel-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 16v6H4v-6zm0-14v12H4V6h11v6.17l-3.59-3.58L10 10l6 6l6-6l-1.41-1.41L17 12.17V6z"></svg:path>`,
})
export class CarbonBottomPanelCloseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
