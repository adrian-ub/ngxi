import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSkipRightFillIcon],svg[ri-skip-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6v12h-2V6zm-4 6l-6 6V6z"></svg:path>`,
})
export class RiSkipRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
