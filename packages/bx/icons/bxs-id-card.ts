import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsIdCardIcon],svg[bx-bxs-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM8.715 8c1.151 0 2 .849 2 2s-.849 2-2 2s-2-.849-2-2s.848-2 2-2zm3.715 8H5v-.465c0-1.373 1.676-2.785 3.715-2.785s3.715 1.412 3.715 2.785V16zM19 15h-4v-2h4v2zm0-4h-5V9h5v2z" fill="currentColor"></svg:path>`,
})
export class BxBxsIdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
