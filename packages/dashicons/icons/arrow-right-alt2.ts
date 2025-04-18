import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsArrowRightAlt2Icon],svg[dashicons-arrow-right-alt2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 15l5-5l-5-5l1-2l7 7l-7 7z"></svg:path>`,
})
export class DashiconsArrowRightAlt2Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
