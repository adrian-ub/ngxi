import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoYandexInternationalIcon],svg[fontisto-yandex-international-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.2 24v-7.786L0 2.25h2.616L6.45 13.017L10.86-.001h2.405L7.607 16.302v7.697z"></svg:path>`,
})
export class FontistoYandexInternationalIcon {
  readonly viewBox = input("0 0 13 24")
  readonly width = input("0.55em")
  readonly height = input("1em")
}
