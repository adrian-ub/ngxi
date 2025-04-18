import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciDot05XlIcon],svg[ci-dot-05-xl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"></svg:path>`,
})
export class CiDot05XlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
