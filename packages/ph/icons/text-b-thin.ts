import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextBThinIcon],svg[ph-text-b-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.27 117.21A40 40 0 0 0 148 44H80a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h80a44 44 0 0 0 10.27-86.79M84 52h64a32 32 0 0 1 0 64H84Zm76 144H84v-72h76a36 36 0 0 1 0 72"></svg:path>`,
})
export class PhTextBThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
