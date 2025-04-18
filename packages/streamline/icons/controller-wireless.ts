import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineControllerWirelessIcon],svg[streamline-controller-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.717 9.666h1.652m-.826-.826v1.652m6.77-3.936H3.78v.005a3.11 3.11 0 1 0 2.344 4.933h1.671a3.11 3.11 0 1 0 2.516-4.938Zm0 0s0 0 0 0"></svg:path><svg:path d="M9.367 10.742a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m1.687-1.25a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M3.196 1.45C3.672 1.135 5.098.5 7 .5s3.328.634 3.804.95M5.098 3.828C5.415 3.67 6.24 3.353 7 3.353s1.585.317 1.902.475"></svg:path></svg:g>`,
})
export class StreamlineControllerWirelessIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
