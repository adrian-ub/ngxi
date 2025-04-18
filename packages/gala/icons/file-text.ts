import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaFileTextIcon],svg[gala-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 32,48 V 207.9236"></svg:path><svg:path d="M 224,96 V 208"></svg:path><svg:path d="m 64,16 h 80"></svg:path><svg:path d="M 64,240 H 192"></svg:path><svg:path d="m 224,208 c 0.0874,15.98169 -16,32 -32,32"></svg:path><svg:path d="m -32,208 c -10e-7,16 -16,32 -32,32" transform="scale(-1 1)"></svg:path><svg:path d="M -32,-47.976784 C -32,-32 -48,-16.356322 -63.999997,-16.000002" transform="scale(-1)"></svg:path><svg:path d="M 223.91257,96.071779 144,16"></svg:path><svg:path d="m -144,64 c -0.0492,15.912926 -16.06452,31.999995 -32,32" transform="scale(-1 1)"></svg:path><svg:path d="M 144,64 V 16"></svg:path><svg:path d="m 176,96 h 48"></svg:path><svg:path d="m 80,208 h 32"></svg:path><svg:path d="m 96,144 v 64"></svg:path><svg:path d="m 64,144 h 64"></svg:path><svg:path d="m 128,144 v 16"></svg:path><svg:path d="m 64,144 v 16"></svg:path></svg:g>`,
})
export class GalaFileTextIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
