import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRtlIcon],svg[arcticons-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 19.5h13.667v9H3.5zm13.667 0h13.667v9H17.167z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.833 19.5H44.5v9H30.833z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.667 21.832v4h6M7.333 26v-4h4.66c.74 0 1.34.601 1.34 1.343s-.6 1.344-1.34 1.344h-4.66m4.66 0l1.309 1.312M21 22h6m-3 4v-4"></svg:path>`,
})
export class ArcticonsRtlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
