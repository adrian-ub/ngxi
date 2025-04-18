import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHouseThinIcon],svg[ph-house-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 111.51l-80-80a12 12 0 0 0-17 0l-80 80A12 12 0 0 0 36 120v96a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-60h40v60a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-96a12 12 0 0 0-3.51-8.49M212 212h-56v-60a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4v60H44v-92a4 4 0 0 1 1.17-2.83l80-80a4 4 0 0 1 5.66 0l80 80A4 4 0 0 1 212 120Z"></svg:path>`,
})
export class PhHouseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
