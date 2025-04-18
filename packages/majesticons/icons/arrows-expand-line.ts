import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowsExpandLineIcon],svg[majesticons-arrows-expand-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 4a1 1 0 0 1-1 1H6.414l3.293 3.293a1 1 0 0 1-1.414 1.414L5 6.414V8a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm8.586 15l-3.293-3.293a1 1 0 0 1 1.414-1.414L19 17.586V16a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.586zM9 20a1 1 0 0 0-1-1H6.414l3.293-3.293a1 1 0 0 0-1.414-1.414L5 17.586V16a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zm8.586-15l-3.293 3.293a1 1 0 0 0 1.414 1.414L19 6.414V8a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.586z"></svg:path></svg:g>`,
})
export class MajesticonsArrowsExpandLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
