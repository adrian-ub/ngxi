import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLinkCreateHyperlinkLinkMakeUnlinkIcon],svg[streamline-interface-link-create-hyperlink-link-make-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 6.49L.79 9.67a1 1 0 0 0 0 1.42l2.12 2.12a1 1 0 0 0 1.42 0L7.51 10M10 7.51l3.18-3.18a1 1 0 0 0 0-1.42L11.09.79a1 1 0 0 0-1.42 0L6.49 4M9 5L5 9"></svg:path>`,
})
export class StreamlineInterfaceLinkCreateHyperlinkLinkMakeUnlinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
