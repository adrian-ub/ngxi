import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSigmaBoldIcon],svg[ph-sigma-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 72V60H89l48.4 60.5a12 12 0 0 1 0 15L89 196h91v-12a12 12 0 0 1 24 0v24a12 12 0 0 1-12 12H64a12 12 0 0 1-9.37-19.5l58-72.5l-58-72.5A12 12 0 0 1 64 36h128a12 12 0 0 1 12 12v24a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhSigmaBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
