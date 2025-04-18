import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEkitagIcon],svg[arcticons-ekitag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.625 5.5h16.818m-8.409 0v16.818m-8.409 0h16.818m3.364-11.212h16.818m-16.818 5.606h16.818M33.216 5.5v16.818M4.625 25.682v10.091m0-10.091h16.818V42.5H10.231m14.576-16.818v10.091m16.818-7.591V42.5H30.413m-5.606-16.818h14.318m-34.5 8.409h16.818"></svg:path><svg:circle cx="40.625" cy="24.682" r=".75" fill="currentColor"></svg:circle><svg:circle cx="42.625" cy="26.382" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsEkitagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
