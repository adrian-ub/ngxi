import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsFIcon],svg[ls-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255 5v78c-11-7-25-11-39-11c-39 0-70 31-71 70v86h110v60H145v466H73V288H0v-60h73v-84c0-53 29-99 72-124c22-12 45-20 71-20c14 0 27 2 39 5"></svg:path>`,
})
export class LsFIcon {
  readonly viewBox = input("0 0 255 754")
  readonly width = input("0.34em")
  readonly height = input("1em")
}
