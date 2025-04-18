import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHiwatchproIcon],svg[arcticons-hiwatchpro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.208 42.071L42.62 34.75v-21.5L29.207 5.083V32.75m-10.413-17.5v27.667L5.38 34.75v-21.5l13.413-7.32M29.208 24H18.794"></svg:path>`,
})
export class ArcticonsHiwatchproIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
