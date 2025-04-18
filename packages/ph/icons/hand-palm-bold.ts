import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHandPalmBoldIcon],svg[ph-hand-palm-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 84a32 32 0 0 0-8 1V60a32 32 0 0 0-43.21-30A32 32 0 0 0 76 44v1a32 32 0 0 0-40 31v76a92 92 0 0 0 184 0v-36a32 32 0 0 0-32-32m8 68a68 68 0 0 1-136 0V76a8 8 0 0 1 16 0v40a12 12 0 0 0 24 0V44a8 8 0 0 1 16 0v64a12 12 0 0 0 24 0V60a8 8 0 0 1 16 0v65.4a52.09 52.09 0 0 0-40 50.6a12 12 0 0 0 24 0a28 28 0 0 1 28-28a12 12 0 0 0 12-12v-20a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhHandPalmBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
