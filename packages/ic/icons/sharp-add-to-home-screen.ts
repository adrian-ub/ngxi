import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAddToHomeScreenIcon],svg[ic-sharp-add-to-home-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1.01L6 1v5h2V5h10v14H8v-1H6v5h14zM10 15h2V8H5v2h3.59L3 15.59L4.41 17L10 11.41z"></svg:path>`,
})
export class IcSharpAddToHomeScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
