import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyparkingIcon],svg[arcticons-myparking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.269 37.5h2.519m2.217 0h2.519m-7.255-3.375h2.519m2.217 0h2.519m-7.255-3.375h2.519m2.217 0h2.519m-7.255-3.375h2.519m2.217 0h2.519M14.269 24h2.519m2.217 0h2.519m-7.255-3.375h2.519m2.217 0h2.519m-7.255-3.375h2.519m2.217 0h2.519m6.952 3.375h2.519m2.217 0h2.519m-7.255-3.375h2.519m2.217 0h2.519m-21.462-3.375h2.519m2.217 0h2.519M14.269 10.5h2.519m2.217 0h2.519m2.217 16.875h2.518m2.217 0h2.519M23.741 24h2.518m2.217 0h2.519m-7.254-10.125h2.518m2.217 0h2.519M23.741 10.5h2.518m2.217 0h2.519m2.217 3.375h2.519M33.212 24h2.519"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMyparkingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
