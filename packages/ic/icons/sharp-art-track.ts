import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpArtTrackIcon],svg[ic-sharp-art-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13h-8v-2h8zm0-6h-8v2h8zm-8 10h8v-2h-8zM12 7v10H2V7zm-1.5 8l-2.25-3l-1.75 2.26l-1.25-1.51L3.5 15z"></svg:path>`,
})
export class IcSharpArtTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
