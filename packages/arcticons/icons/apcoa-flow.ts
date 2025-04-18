import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApcoaFlowIcon],svg[arcticons-apcoa-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.239 9.484h30.638l-2.157 9.25H9.118zm-2.121 9.25h30.639l-2.157 9.25H6.998zm-2.12 9.25h16.574l-2.312 9.25H4.877z"></svg:path>`,
})
export class ArcticonsApcoaFlowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
