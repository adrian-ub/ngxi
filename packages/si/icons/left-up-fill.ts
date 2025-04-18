import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siLeftUpFillIcon],svg[si-left-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.707 4.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L8 7.414V14.6a5.4 5.4 0 0 0 5.4 5.4H19a1 1 0 1 0 0-2h-5.6a3.4 3.4 0 0 1-3.4-3.4V7.414l2.293 2.293a1 1 0 0 0 1.414-1.414z"></svg:path>`,
})
export class SiLeftUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
