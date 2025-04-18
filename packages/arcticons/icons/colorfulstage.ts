import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorfulstageIcon],svg[arcticons-colorfulstage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="18.154" cy="32.507" r="7.493" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.647 32.507V8c10.281 0 14.292 9.266 13.62 14.187c-6.004-4.09-13.62-2.8-13.62-2.8"></svg:path>`,
})
export class ArcticonsColorfulstageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
