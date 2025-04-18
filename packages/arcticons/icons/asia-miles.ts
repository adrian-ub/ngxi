import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAsiaMilesIcon],svg[arcticons-asia-miles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7.934 43l10.587-24.176L29.164 43"></svg:path><svg:ellipse cx="18.549" cy="30.912" rx="9.988" ry="2.01"></svg:ellipse></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.048 5s1.83 14.521 13.018 11.083c-3.388 2.608-7.198 4.64-11.893 5.462"></svg:path>`,
})
export class ArcticonsAsiaMilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
