import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBedThinIcon],svg[ph-bed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76H28V48a4 4 0 0 0-8 0v160a4 4 0 0 0 8 0v-36h216v36a4 4 0 0 0 8 0v-96a36 36 0 0 0-36-36M28 84h80v80H28Zm88 80V84h100a28 28 0 0 1 28 28v52Z"></svg:path>`,
})
export class PhBedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
