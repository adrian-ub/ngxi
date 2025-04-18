import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMaleSymbolIcon],svg[hugeicons-male-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.789 14.52A6.72 6.72 0 0 0 15 16c3.72 0 6.75-3.03 6.75-6.75S18.72 2.5 15 2.5S8.25 5.53 8.25 9.25c0 1.59.554 3.055 1.479 4.21L3.82 19.37c-.07-.47-.07-1.14-.07-2.12v-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2c0 2.03 0 3.14.8 3.94C3.86 22 4.97 22 7 22h2c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H6.998c-.979 0-1.648 0-2.118-.07zM9.75 9.25a5.25 5.25 0 1 1 10.5 0a5.25 5.25 0 1 1-10.5 0" color="currentColor"></svg:path>`,
})
export class HugeiconsMaleSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
