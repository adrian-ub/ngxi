import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaLayerIcon],svg[gala-layer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 16,80 127.94695,15.974538"></svg:path><svg:path d="m 16,80 112,64"></svg:path><svg:path d="m 16,176 112,64"></svg:path><svg:path d="M 128,16 240,80"></svg:path><svg:path d="M 128,144 240,80"></svg:path><svg:path d="M 128,240 240,176"></svg:path><svg:path d="m 16,128 112,64"></svg:path><svg:path d="M 128,192 239.94695,128.0019"></svg:path><svg:path d="M 16,128 58.031909,104.01298"></svg:path><svg:path d="M 16,176 58.032661,151.99127"></svg:path><svg:path d="m 239.94694,128.00191 -41.9796,-23.98708"></svg:path><svg:path d="M 240,176 197.96608,151.99056"></svg:path></svg:g>`,
})
export class GalaLayerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
