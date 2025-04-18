import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTagArrowRightIcon],svg[ix-tag-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 64l192 192h-60.352L238.315 106.667H106.667v131.648l128 128v60.352L64 256V64zm-96 128c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m187.581 262.249l30.17 30.17l100.418-100.418l-100.418-100.418l-30.17 30.17l48.915 48.915H277.333v42.667h119.163z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagArrowRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
