import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCleaningServicesIcon],svg[ic-sharp-cleaning-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11V1H9v10H3v12h18V11zm4 10h-2v-4h-2v4h-2v-4h-2v4H9v-4H7v4H5v-8h14z"></svg:path>`,
})
export class IcSharpCleaningServicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
