import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCropIcon],svg[cil-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M433.372 56H88V16H56v40H16v32h40v368h368v40h32v-40h40v-32h-40V78.628l40-40V16h-22.628Zm-32 32L88 401.372V88ZM424 424H110.628L424 110.628Z"></svg:path>`,
})
export class CilCropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
