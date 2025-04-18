import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAssetVideoSolidIcon],svg[bubbles-asset-video-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.372 2.429A2.143 2.143 0 0 0 10.23.286H2.515A2.143 2.143 0 0 0 .372 2.429V7.57a2.143 2.143 0 0 0 2.143 2.143h7.714a2.143 2.143 0 0 0 2.143-2.143zM8.575 5.53L5.824 7.066a.62.62 0 0 1-.609 0a.59.59 0 0 1-.3-.523V3.466a.59.59 0 0 1 .3-.523a.62.62 0 0 1 .609 0l2.751 1.526a.6.6 0 0 1 0 1.062"></svg:path>`,
})
export class BubblesAssetVideoSolidIcon {
  readonly viewBox = input("0 0 13 10")
  readonly width = input("1.3em")
  readonly height = input("1em")
}
