import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCopyIcon],svg[zmdi-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 5v43H43v299H0V48q0-18 12.5-30.5T43 5zm64 86q17 0 29.5 12.5T405 133v299q0 18-12.5 30.5T363 475H128q-18 0-30.5-12.5T85 432V133q0-17 12.5-29.5T128 91zm0 341V133H128v299z"></svg:path>`,
})
export class ZmdiCopyIcon {
  readonly viewBox = input("0 0 408 480")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
