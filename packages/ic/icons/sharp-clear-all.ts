import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpClearAllIcon],svg[ic-sharp-clear-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13h14v-2H5zm-2 4h14v-2H3zM7 7v2h14V7z"></svg:path>`,
})
export class IcSharpClearAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
