import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabletAndroidIcon],svg[material-symbols-light-tablet-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 22q-.667 0-1.141-.475T4 20.386V3.615q0-.666.475-1.14T5.615 2h12.77q.666 0 1.14.475T20 3.614v16.77q0 .666-.475 1.14t-1.14.475zm4.615-2.346h3.538v-.77h-3.538zM5 16.538h14V5.5H5z"></svg:path>`,
})
export class MaterialSymbolsLightTabletAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
