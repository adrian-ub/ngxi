import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciDot04LIcon],svg[ci-dot-04-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17a5 5 0 1 1 0-10a5 5 0 0 1 0 10Z"></svg:path>`,
})
export class CiDot04LIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
