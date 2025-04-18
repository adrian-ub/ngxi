import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laYandexInternationalIcon],svg[la-yandex-international-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 1l-5.6 16.2l-5-13.2H7l7 18.6V31h3v-9.9L24 1z"></svg:path>`,
})
export class LaYandexInternationalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
