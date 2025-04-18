import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLampPendantBoldIcon],svg[ph-lamp-pendant-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 72.28V72a20 20 0 0 0-20-20h-20V16a12 12 0 0 0-24 0v36H96a20 20 0 0 0-20 20v.28A115.7 115.7 0 0 0 12 176a12 12 0 0 0 12 12h60.19a44 44 0 0 0 87.62 0H232a12 12 0 0 0 12-12a115.7 115.7 0 0 0-64-103.72M128 204a20 20 0 0 1-19.6-16h39.2a20 20 0 0 1-19.6 16m-91.22-40a91.75 91.75 0 0 1 55.84-72.95A12 12 0 0 0 100 80v-4h56v4a12 12 0 0 0 7.38 11.08a91.75 91.75 0 0 1 55.84 73Z"></svg:path>`,
})
export class PhLampPendantBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
