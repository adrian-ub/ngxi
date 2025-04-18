import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTMobilePlayIcon],svg[arcticons-t-mobile-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.54 4.5H10.658v39h8.21V28.105h6.672c6.518 0 11.802-5.284 11.802-11.802S32.058 4.5 25.54 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.849 16.303L18.84 9.369v13.868z"></svg:path>`,
})
export class ArcticonsTMobilePlayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
