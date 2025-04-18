import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTwitchIcon],svg[grommet-icons-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.673 16.163l3.43-3.429V1.959H3.939v14.204h4.408v2.939l2.94-2.939zM1 3.92L1.98 0h20.08v13.715l-7.836 7.835h-3.917L7.857 24H5.409v-2.45H1zm10.286 7.836h-1.96V5.877h1.96v5.878Zm5.387 0h-1.959V5.877h1.96v5.878Z" clip-rule="evenodd"></svg:path>`,
})
export class GrommetIconsTwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
