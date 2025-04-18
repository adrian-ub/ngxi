import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epPositionIcon],svg[ep-position-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.6 417.088l319.744 43.072l39.168 310.272L845.12 178.88zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992z"></svg:path>`,
})
export class EpPositionIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
