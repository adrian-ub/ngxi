import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSdCardMiniFillIcon],svg[ri-sd-card-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.707l1.562-1.567A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1m8 2v4h2V4zm-3 0v4h2V4zM9 4v4h2V4z"></svg:path>`,
})
export class RiSdCardMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
