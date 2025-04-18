import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSourceIcon],svg[ic-sharp-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l-2-2H2v16h20V6zm2 10H6v-2h8zm4-4H6v-2h12z"></svg:path>`,
})
export class IcSharpSourceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
