import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTagIcon],svg[ix-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 64l213.333 213.333l-192 192L64 256V64zm-17.685 42.667H106.667v131.648l170.666 170.666l131.648-131.648zM160 192c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
