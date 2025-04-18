import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpGMobiledataIcon],svg[ic-sharp-g-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11v2h2v2H9V9h7V7H7v10h9v-6z"></svg:path>`,
})
export class IcSharpGMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
