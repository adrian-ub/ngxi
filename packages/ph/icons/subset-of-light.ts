import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSubsetOfLightIcon],svg[ph-subset-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 208a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h152a6 6 0 0 1 6 6m-6-46h-96a50 50 0 0 1 0-100h96a6 6 0 0 0 0-12h-96a62 62 0 0 0 0 124h96a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhSubsetOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
