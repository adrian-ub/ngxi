import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundWebAssetIcon],svg[ic-round-web-asset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m-1 14H6c-.55 0-1-.45-1-1V8h14v9c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundWebAssetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
