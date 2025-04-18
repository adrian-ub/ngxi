import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpEmojiFlagsIcon],svg[ic-sharp-emoji-flags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 9l-1-2H7V5.72c.6-.34 1-.98 1-1.72c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V21h2v-4h5l1 2h7V9zm4 8h-4l-1-2H7V9h5l1 2h5z"></svg:path>`,
})
export class IcSharpEmojiFlagsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
