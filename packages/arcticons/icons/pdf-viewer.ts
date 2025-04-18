import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPdfViewerIcon],svg[arcticons-pdf-viewer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.904 29.598V18.395h1.867a5.6 5.6 0 0 1 5.602 5.601h0a5.6 5.6 0 0 1-5.602 5.602zm11.013-11.159H37.5m-5.583 5.583h3.641m-3.641-5.583v11.166m-21.417 0V18.402h3.734a3.734 3.734 0 0 1 0 7.469H10.5"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsPdfViewerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
