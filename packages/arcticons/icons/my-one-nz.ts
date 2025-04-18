import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyOneNzIcon],svg[arcticons-my-one-nz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.129 21.227h5.068l-5.068 6.714h5.068m-24.205 0v-4.18c0-1.4-1.134-2.534-2.534-2.534h0a2.534 2.534 0 0 0-2.533 2.534m0 4.18v-6.714m22.118 6.714v-4.18c0-1.4-1.134-2.534-2.534-2.534h0a2.534 2.534 0 0 0-2.533 2.534m0 4.18v-6.714m-5.147 5.435a2.53 2.53 0 0 1-2.202 1.279h0a2.534 2.534 0 0 1-2.533-2.534v-1.646c0-1.4 1.134-2.534 2.533-2.534h0c1.4 0 2.534 1.134 2.534 2.534v.823h-5.067"></svg:path><svg:circle cx="27.145" cy="27.771" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.763 23.76a2.534 2.534 0 1 1 5.068 0v1.647a2.534 2.534 0 1 1-5.068 0z"></svg:path>`,
})
export class ArcticonsMyOneNzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
