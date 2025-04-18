import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDehazeIcon],svg[ic-sharp-dehaze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16v2h20v-2zm0-5v2h20v-2zm0-5v2h20V6z"></svg:path>`,
})
export class IcSharpDehazeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
