import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTownFilledIcon],svg[tdesign-town-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.004 7.998H6v2.004h2.004zm0 4H6v2.004h2.004zm0 4H6v2.004h2.004z"></svg:path><svg:path fill="currentColor" d="M7.442 2H2v20h20V8.638L16.468 2H11v3.913zM11 8.887V20H4V4h2.558zm4-.889h2.004v2.004H15zm0 4h2.004v2.004H15zm2.004 4v2.004H15v-2.004z"></svg:path>`,
})
export class TdesignTownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
