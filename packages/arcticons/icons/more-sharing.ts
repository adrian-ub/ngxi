import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoreSharingIcon],svg[arcticons-more-sharing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.244 11.876h25.751M4.456 32.961h21.621m-23.49-7.028h35.326m-34.8-7.028H20.16m-7.028 7.028l7.028-7.028l-7.028-7.028m14.178 4.685l4.686-4.685L27.31 7.19m-5.918 30.456l4.686-4.685l-7.029-7.029m14.178 4.686l4.686-4.685l-4.686-4.686"></svg:path>`,
})
export class ArcticonsMoreSharingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
