import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsImgurviewerIcon],svg[arcticons-imgurviewer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.455 41.703L34.944 6.588h-8.18L22.02 22.464V17.14h-8.18v25.11a1.25 1.25 0 0 0 1.25 1.25h6.952a2.52 2.52 0 0 0 2.413-1.797"></svg:path><svg:circle cx="17.99" cy="9.434" r="4.934" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsImgurviewerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
