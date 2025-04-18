import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCropIcon],svg[gg-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.932 9.009V16H15v4.009h2V16h3.932v-2H17V7.009H9.932V3h-2v4.009H4v2zm2 0V14H15V9.009z" clip-rule="evenodd"></svg:path>`,
})
export class GgCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
