import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsYandexIcon],svg[fa-brands-yandex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153.1 315.8L65.7 512H2l96-209.8c-45.1-22.9-75.2-64.4-75.2-141.1C22.7 53.7 90.8 0 171.7 0H254v512h-55.1V315.8zm45.8-269.3h-29.4c-44.4 0-87.4 29.4-87.4 114.6c0 82.3 39.4 108.8 87.4 108.8h29.4z"></svg:path>`,
})
export class FaBrandsYandexIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
