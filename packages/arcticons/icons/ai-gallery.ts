import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAiGalleryIcon],svg[arcticons-ai-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.25 18.088l9.976 18.25c.956 1.75 1.113 3.17-.883 3.173l-20.965.033c-1.35.002-2.43-.876-1.57-2.453l10.368-19.003c1.146-2.101 2.56-.94 3.074 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.042 30.514l6.585-8.828L43.5 39.446l-16.157.065M16.582 21.817l-4.186 9.321l8.7.066ZM8.864 39.54l1.406-3.855h12.494l2.028 3.83m6.835-17.829v17.808M35 26.731V39.48"></svg:path><svg:circle cx="32.151" cy="12.561" r="4.105" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsAiGalleryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
