import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSkipDownFillIcon],svg[ri-skip-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17H6v-2h12zm-6-4l6-6H6z"></svg:path>`,
})
export class RiSkipDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
