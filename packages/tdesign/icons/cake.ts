import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCakeIcon],svg[tdesign-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.998 1.998h2.004v2.004H6.998zm4 0h2.004v2.004h-2.004zm4 0h2.004v2.004h-2.004zM9 5v5h2V5h2v5h2V5h2v5h4v10h2v2H1v-2h2V10h4V5zm-4 7v3h1.162L9 15.946l3-1l3 1L17.838 15H19v-3zm14 5h-.838L15 18.054l-3-1l-3 1L5.838 17H5v3h14z"></svg:path>`,
})
export class TdesignCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
