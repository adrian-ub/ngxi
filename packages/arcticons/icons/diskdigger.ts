import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiskdiggerIcon],svg[arcticons-diskdigger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="28.977" height="7.639" x="5.5" y="31.831" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.015" ry="1.015"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.264 32.253l-2.049-6.109m-.945-2.8l-.04-.153l-1.613-4.8a.93.93 0 0 0-.893-.639H11.26a.94.94 0 0 0-.903.64L5.699 32.243m1.109-3.29h26.337m-2.765 5.908H9.981"></svg:path><svg:circle cx="25.387" cy="17.022" r="8.493" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="40.502" cy="31.602" r="1.998" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.09 33.015l-7.421-7.422a1.997 1.997 0 1 1 2.825-2.825l7.42 7.422"></svg:path>`,
})
export class ArcticonsDiskdiggerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
