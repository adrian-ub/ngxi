import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPrevious32RegularIcon],svg[fluent-previous-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5a1 1 0 0 0-2 0v22a1 1 0 1 0 2 0zm22.003 1.504c0-2.002-2.236-3.192-3.897-2.073l-14.003 9.432A2.5 2.5 0 0 0 10.09 18l14.003 9.56c1.66 1.132 3.91-.056 3.91-2.065zm-2.78-.414a.5.5 0 0 1 .78.414v18.992a.5.5 0 0 1-.782.412L11.218 16.35a.5.5 0 0 1 .002-.828z"></svg:path>`,
})
export class FluentPrevious32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
