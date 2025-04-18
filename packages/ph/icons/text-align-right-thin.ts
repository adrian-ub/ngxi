import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextAlignRightThinIcon],svg[ph-text-align-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m180 36H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m0 40H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextAlignRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
