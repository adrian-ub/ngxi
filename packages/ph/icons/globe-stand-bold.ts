import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandBoldIcon],svg[ph-globe-stand-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 176a72 72 0 1 0-72-72a72.08 72.08 0 0 0 72 72m0-120a48 48 0 1 1-48 48a48.05 48.05 0 0 1 48-48m12 159.35V228h20a12 12 0 0 1 0 24h-64a12 12 0 0 1 0-24h20v-12.64A112 112 0 0 1 53.88 27.84a12 12 0 1 1 17.59 16.32a88 88 0 0 0 124.37 124.37a12 12 0 1 1 16.32 17.59A111.5 111.5 0 0 1 148 215.35"></svg:path>`,
})
export class PhGlobeStandBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
