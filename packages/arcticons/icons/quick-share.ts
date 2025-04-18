import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuickShareIcon],svg[arcticons-quick-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0-11.874-9.626-21.5-21.5-21.5c-10.15 0-18.656 7.032-20.913 16.49H22.99"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.464 14.463l4.527 4.527l-4.527 4.527M2.5 24c0 11.874 9.626 21.5 21.5 21.5c10.15 0 18.656-7.032 20.913-16.49H25.01"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.536 33.536l-4.527-4.526l4.527-4.527"></svg:path>`,
})
export class ArcticonsQuickShareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
