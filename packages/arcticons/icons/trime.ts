import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrimeIcon],svg[arcticons-trime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 41.41h39M24 6.59v34.82m14.58-31.12V27a2.11 2.11 0 0 1-2.11 2.11H11.53A2.11 2.11 0 0 1 9.42 27V10.29"></svg:path>`,
})
export class ArcticonsTrimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
