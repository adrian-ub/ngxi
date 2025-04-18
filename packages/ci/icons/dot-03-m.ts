import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciDot03MIcon],svg[ci-dot-03-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z"></svg:path>`,
})
export class CiDot03MIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
