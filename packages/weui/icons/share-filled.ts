import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiShareFilledIcon],svg[weui-share-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 4.366V7h6.251c.55 0 .999.446.999.996v13.008a1 1 0 0 1-.996.996H4.996A1 1 0 0 1 4 21.004V7.996A1 1 0 0 1 4.999 7h6.251V4.376l-1.72 1.72l-1.06-1.06l2.828-2.829a1 1 0 0 1 1.414 0l2.828 2.829l-1.06 1.06zM11.25 7v6.5h1.5V7z"></svg:path>`,
})
export class WeuiShareFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
