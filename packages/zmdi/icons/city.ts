import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCityIcon],svg[zmdi-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 195h128v213H0V109h128V67l64-64l64 64zM85 365v-42H43v42zm0-85v-43H43v43zm0-85v-43H43v43zm128 170v-42h-42v42zm0-85v-43h-42v43zm0-85v-43h-42v43zm0-86V67h-42v42zm128 256v-42h-42v42zm0-85v-43h-42v43z"></svg:path>`,
})
export class ZmdiCityIcon {
  readonly viewBox = input("0 0 384 408")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
