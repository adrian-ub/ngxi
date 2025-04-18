import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOinkoinIcon],svg[arcticons-oinkoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="19.5" ry="12.829"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.55 24c0 2.244-1.211 4.064-2.705 4.064S29.14 26.244 29.14 24s1.21-4.064 2.705-4.064S34.55 21.756 34.55 24m-15.69 0c0 2.244-1.21 4.064-2.705 4.064S13.45 26.244 13.45 24s1.211-4.064 2.705-4.064S18.86 21.756 18.86 24"></svg:path>`,
})
export class ArcticonsOinkoinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
