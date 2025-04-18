import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaSecureIcon],svg[gala-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="m 127.99999,239.96468 c 0,0 95.98506,-31.99503 95.98506,-111.98257"></svg:path><svg:path d="M 223.98505,127.98211 V 31.997059 c 0,0 -31.99502,-15.997511 -95.98506,-15.997511"></svg:path><svg:path d="m 128,239.96468 c 0,0 -95.985056,-31.99503 -95.985056,-111.98257"></svg:path><svg:path d="M 32.014944,127.98211 V 31.997059 c 0,0 31.995019,-15.997509 95.985056,-15.997509"></svg:path><svg:path d="M 191.99003,63.99208 C 128,111.9846 112.00249,175.97464 112.00249,175.97464 c 0,0 -15.997511,-19.0946 -31.995019,-31.99502"></svg:path></svg:g>`,
})
export class GalaSecureIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
