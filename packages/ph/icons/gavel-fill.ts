import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGavelFillIcon],svg[ph-gavel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.69 99.31a16 16 0 0 1 0-22.63l64-64a16 16 0 0 1 22.63 22.63l-64 64a16 16 0 0 1-22.63 0m190.63 17.37a16 16 0 0 0-22.63 0l-64 64a16 16 0 0 0 0 22.63a16 16 0 0 0 22.63 0l64-64a16 16 0 0 0 0-22.63m-35.11-15.8l-53.09-53.09a4 4 0 0 0-5.66 0L87.8 109.45a4 4 0 0 0 0 5.66l15.2 15.23l-74.31 74.35a16 16 0 0 0 22.62 22.62L125.66 153l15.23 15.23a4 4 0 0 0 5.66 0l61.66-61.66a4 4 0 0 0 0-5.69"></svg:path>`,
})
export class PhGavelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
