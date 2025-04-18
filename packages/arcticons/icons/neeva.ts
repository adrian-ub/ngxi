import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNeevaIcon],svg[arcticons-neeva-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.5 28.51l.002 12.232h12.08V28.51zm26.918-2.76l.002 14.992H43.5V25.75M4.653 25.7c.542-10.68 9.615-18.914 20.299-18.42"></svg:path><svg:path d="M25.22 18.272a7.376 7.376 0 0 1 6.204 7.567M28.662 7.813a19.426 19.426 0 0 1 14.8 18.018m-38.793-.078a19.427 19.427 0 0 0 20.51-18.444m3.384.695s.271 5.93-3.294 10.22"></svg:path></svg:g>`,
})
export class ArcticonsNeevaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
