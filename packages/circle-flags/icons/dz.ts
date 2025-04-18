import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsDzIcon],svg[circle-flags-dz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsDz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsDz0)"><svg:path fill="#496e2d" d="M0 0h256l45.3 251.8L256 512H0z"></svg:path><svg:path fill="#eee" d="M256 0h256v512H256z"></svg:path><svg:g fill="#d80027"><svg:path d="m311 206.9l-21 29l-34-11l21 28.8l-21 29l34-11.1l21 29v-35.8l34-11.1l-34-11z"></svg:path><svg:path d="M277.2 328.3a72.3 72.3 0 1 1 34.5-136a89 89 0 1 0 0 127.3a72 72 0 0 1-34.5 8.7"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsDzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
