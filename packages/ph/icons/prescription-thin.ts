import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPrescriptionThinIcon],svg[ph-prescription-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m177.66 188l25.17-25.17a4 4 0 0 0-5.66-5.66L172 182.34L121.66 132H124a48 48 0 0 0 0-96H72a4 4 0 0 0-4 4v152a4 4 0 0 0 8 0v-60h34.34l56 56l-25.17 25.17a4 4 0 0 0 5.66 5.66L172 193.66l25.17 25.17a4 4 0 0 0 5.66-5.66ZM76 44h48a40 40 0 0 1 0 80H76Z"></svg:path>`,
})
export class PhPrescriptionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
