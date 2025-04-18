import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWhiteholeIcon],svg[arcticons-whitehole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.19 25.2v9.795c0 .963.78 1.744 1.744 1.744h9.395c3.693 0 6.917-2.787 7.156-6.472a6.934 6.934 0 0 0-8.322-7.253c.076-.501.128-1.01.128-1.533c0-5.645-4.576-10.22-10.22-10.22c-4.754 0-8.738 3.251-9.88 7.648c-1.6-.305-3.334-.229-5.166.596C6.772 20.97 4.509 24.153 4.5 27.72a8.997 8.997 0 0 0 8.997 9.019h6.406"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.962 28.426l3.228-3.227l3.227 3.227"></svg:path>`,
})
export class ArcticonsWhiteholeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
