import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAxmorIcon],svg[arcticons-axmor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.509 15.465l1.516 1.268a6.83 6.83 0 0 1 2.447 5.237v12.123a8.407 8.407 0 0 1-8.407 8.407h-20.13a8.407 8.407 0 0 1-8.407-8.407V22.016c0-2.048.92-3.989 2.506-5.285L19.93 7.01a6.69 6.69 0 0 1 8.522.048l6.128 5.124V6.92"></svg:path><svg:circle cx="20.796" cy="22.097" r="1.909" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="27.82" cy="22.097" r="1.909" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="20.796" cy="29.154" r="1.909" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="27.82" cy="29.154" r="1.909" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsAxmorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
