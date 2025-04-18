import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHdrOnIcon],svg[ic-sharp-hdr-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12.9V9h-5v6h1.5v-2h1.1l.9 2H21l-.9-2.1zm-1.5-1.4h-2v-1h2zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5h-2v-3h2z"></svg:path>`,
})
export class IcSharpHdrOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
