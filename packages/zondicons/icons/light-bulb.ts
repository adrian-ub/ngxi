import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsLightBulbIcon],svg[zondicons-light-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13.33a7 7 0 1 1 6 0V16H7zM7 17h6v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 7 18.5zm2-5.1V14h2v-2.1a5 5 0 1 0-2 0"></svg:path>`,
})
export class ZondiconsLightBulbIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
