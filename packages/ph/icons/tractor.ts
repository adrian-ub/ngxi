import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTractorIcon],svg[ph-tractor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 165.41V134a15.89 15.89 0 0 0-11.4-15.32l-.21-.06l-36.39-9.91V72a8 8 0 0 0-16 0v32.38l-24-6.5V56h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v32h-8a8 8 0 0 0 0 16h28a68.07 68.07 0 0 1 68 68v12a8 8 0 0 0 8 8h32.23A36 36 0 1 0 240 165.41M68 88h-4V56h72v66.77A83.92 83.92 0 0 0 68 88m84 26.45L224 134v20.1a36 36 0 0 0-45.94 21.9H152ZM212 208a20 20 0 1 1 20-20a20 20 0 0 1-20 20M68 120a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52m0 88a36 36 0 1 1 36-36a36 36 0 0 1-36 36m12-36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTractorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
