import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFaceRecognitionIcon],svg[icon-park-outline-face-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 5h8a2 2 0 0 1 2 2v8m0 18v8a2 2 0 0 1-2 2h-8m-18 0H7a2 2 0 0 1-2-2v-8m0-18V7a2 2 0 0 1 2-2h8"></svg:path><svg:path d="M24 38c6.627 0 12-6.268 12-14s-5.373-14-12-14s-12 6.268-12 14s5.373 14 12 14Z"></svg:path><svg:path stroke-linecap="round" d="M6 24h36m-21.93 6.106q1.9 1.406 3.93 1.406q2.028-.001 4.038-1.406"></svg:path></svg:g>`,
})
export class IconParkOutlineFaceRecognitionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
