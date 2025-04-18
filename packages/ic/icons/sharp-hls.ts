import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHlsIcon],svg[ic-sharp-hls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2zm9 6h5v-3.5H17v-1h2v.5h1.5V9h-5v3.5H19v1h-2V13h-1.5zM14 15v-1.5h-2.5V9H10v6z"></svg:path>`,
})
export class IcSharpHlsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
