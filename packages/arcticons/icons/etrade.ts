import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEtradeIcon],svg[arcticons-etrade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.24 3.655l11.745 20.344L17.24 44.344l-7.475-4.318l6.761-11.712H3v-8.63h13.527L9.766 7.968Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.764 3.655l-6.763 11.712L28.984 24l-4.983 8.63l6.763 11.716l7.475-4.318l-6.764-11.712H45v-8.63H31.475L38.24 7.969Z"></svg:path>`,
})
export class ArcticonsEtradeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
