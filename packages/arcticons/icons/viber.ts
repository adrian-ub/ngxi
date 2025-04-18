import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsViberIcon],svg[arcticons-viber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 4.5a1.88 1.88 0 0 0-1.92 1.88v30.07A1.88 1.88 0 0 0 9 38.33h1.88v5.17l10.34-5.17H39a1.88 1.88 0 0 0 1.88-1.88V6.38A1.88 1.88 0 0 0 39 4.5Zm4.7 6.58h5.6a1 1 0 0 1 .94.94a10.1 10.1 0 0 0 .63 3.76a1.85 1.85 0 0 1-.63 2.35l-2 2a18 18 0 0 0 3.38 4.6a19 19 0 0 0 4.61 3.39l2-2a1.85 1.85 0 0 1 2.35-.63a10.1 10.1 0 0 0 3.76.63a1 1 0 0 1 .94.94v5.64a1 1 0 0 1-.94.94A22.53 22.53 0 0 1 12.72 12a1 1 0 0 1 .94-.92Z"></svg:path>`,
})
export class ArcticonsViberIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
