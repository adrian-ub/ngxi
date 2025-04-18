import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCropBoldIcon],svg[ph-crop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 192a12 12 0 0 1-12 12h-28v28a12 12 0 0 1-24 0v-28H64a12 12 0 0 1-12-12V76H24a12 12 0 0 1 0-24h28V24a12 12 0 0 1 24 0v156h156a12 12 0 0 1 12 12M104 76h76v76a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12h-88a12 12 0 0 0 0 24"></svg:path>`,
})
export class PhCropBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
