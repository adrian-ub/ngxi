import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProgressbar95Icon],svg[arcticons-progressbar95-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 20.051h41v7.897h-41zm5.965 0v7.898m5.965-7.898v7.898m5.965-7.898v7.898"></svg:path>`,
})
export class ArcticonsProgressbar95Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
