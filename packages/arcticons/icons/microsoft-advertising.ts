import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftAdvertisingIcon],svg[arcticons-microsoft-advertising-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="39.5" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="15.5"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.999 33.813L39.323 39.5m0-31L13.608 18H6.393a1.5 1.5 0 0 0-1.455 1.135c-.025.098-.09.295-.145.623C4.611 20.848 4.5 22.34 4.5 24s.111 3.151.293 4.242c.055.328.12.524.145.623A1.5 1.5 0 0 0 6.393 30H7"></svg:path><svg:rect width="17" height="17" x="7" y="22.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.5" ry="1.5"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.675 32.641h-4.35m-1.078 3.219l3.253-9.722l3.252 9.723"></svg:path>`,
})
export class ArcticonsMicrosoftAdvertisingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
