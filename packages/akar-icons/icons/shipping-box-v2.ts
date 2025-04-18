import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsShippingBoxV2Icon],svg[akar-icons-shipping-box-v2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path stroke-linecap="round" d="M11.029 2.54a2 2 0 0 1 1.942 0l7.515 4.174a1 1 0 0 1 .514.874v8.235a2 2 0 0 1-1.029 1.749l-7 3.888a2 2 0 0 1-1.942 0l-7-3.889A2 2 0 0 1 3 15.824V7.588a1 1 0 0 1 .514-.874z"></svg:path><svg:path stroke-linecap="round" d="m7.5 4.5l9 5V13M6 12.328L9 14"></svg:path><svg:path d="m3 7l9 5m0 0l9-5m-9 5v9.5"></svg:path></svg:g>`,
})
export class AkarIconsShippingBoxV2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
