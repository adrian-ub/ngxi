import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSmartphoneNotchCircleFilledIcon],svg[pepicons-pencil-smartphone-notch-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilSmartphoneNotchCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M8.5 3.5A1.5 1.5 0 0 0 7 5v16a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 19 21V5a1.5 1.5 0 0 0-1.5-1.5zM8 5a.5.5 0 0 1 .5-.5H10v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1h1.5a.5.5 0 0 1 .5.5v16a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 8 21z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilSmartphoneNotchCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilSmartphoneNotchCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
