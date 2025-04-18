import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilWarningIcon],svg[cil-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 176h32v176h-32zm0 208h32v32h-32z"></svg:path><svg:path fill="currentColor" d="M274.014 16h-36.028L16 445.174V496h480v-50.826ZM464 464H48v-11.041L256 50.826l208 402.133Z"></svg:path>`,
})
export class CilWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
