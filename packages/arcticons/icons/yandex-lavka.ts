import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYandexLavkaIcon],svg[arcticons-yandex-lavka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.381 22.203c1.357-6.367 2.78-13.968 8.356-15.237c4.103-.934 8.279 2.059 8.62 6.19c1.02 12.368-3.536 21.076-9.758 25.71c-8.388 6.249-17.484-1.307-21.533-7.598c-7.208-11.2-6.112-16.9-3.91-21.09c1.683-3.203 6.28-3.733 9.308-.807c4.024 3.89 6.731 7.707 8.917 12.832"></svg:path>`,
})
export class ArcticonsYandexLavkaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
