import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpExitToAppIcon],svg[ic-sharp-exit-to-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67zM21 3H3v6h2V5h14v14H5v-4H3v6h18z"></svg:path>`,
})
export class IcSharpExitToAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
