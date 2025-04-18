import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSkipUpFillIcon],svg[ri-skip-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7h12v2H6zm6 4l-6 6h12z"></svg:path>`,
})
export class RiSkipUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
