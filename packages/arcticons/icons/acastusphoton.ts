import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAcastusphotonIcon],svg[arcticons-acastusphoton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.106 9.606a6.38 6.38 0 0 0-6.38 6.38c0 4.992 4.884 11.01 6.148 12.485a.385.385 0 0 0 .589-.003c1.243-1.48 6.022-7.493 6.022-12.482a6.38 6.38 0 0 0-6.38-6.38m0 8.764a2.384 2.384 0 1 1 2.384-2.385a2.384 2.384 0 0 1-2.384 2.385"></svg:path><svg:circle cx="19" cy="19" r="13.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 42.5L28.541 28.541"></svg:path>`,
})
export class ArcticonsAcastusphotonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
