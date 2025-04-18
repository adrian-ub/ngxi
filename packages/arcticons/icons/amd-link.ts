import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmdLinkIcon],svg[arcticons-amd-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.614 33.614l9.25 9.25v-37h-37l9.25 9.25h18.5zm-18.5 0V19.55l-9.229 9.228l-.021 14.086l14.085-.022l9.228-9.228z"></svg:path>`,
})
export class ArcticonsAmdLinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
