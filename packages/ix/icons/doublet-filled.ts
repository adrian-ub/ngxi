import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDoubletFilledIcon],svg[ix-doublet-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 170.667l64 64v234.667H192V170.667zM320 370.56c-13.283 0-24.052 10.769-24.052 24.052c0 13.284 10.769 24.052 24.052 24.052s24.052-10.768 24.052-24.052S333.283 370.56 320 370.56m21.333-135.893h-42.666v106.667h42.666zM256 42.667l64 64v42.666h-42.667v-24.98l-39.018-39.02H106.667v213.334h63.999v42.666H64V42.668z"></svg:path>`,
})
export class IxDoubletFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
