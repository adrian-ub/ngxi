import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPaintIcon],svg[arcticons-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.288 42.47C13.91 42.412 5.498 34.2 5.498 24S13.91 5.53 24.288 5.53c6.602 0 12.328 3.64 15.76 8.41c1.63 2.265 3.133 5.465 2.131 10.278c-1 4.813-5.944 7.888-8.723 7.888H28.95c-3.896 0-4.265 3.667-2.635 5.396c1.53 1.623.41 4.982-2.028 4.968"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.93 20.832a3.21 3.21 0 0 1-3.21 3.211h0a3.211 3.211 0 0 1 0-6.422h0a3.21 3.21 0 0 1 3.21 3.211m22.557 0a3.21 3.21 0 0 1-3.211 3.211h0a3.21 3.21 0 0 1-3.211-3.21h0a3.21 3.21 0 0 1 3.21-3.212h0a3.21 3.21 0 0 1 3.212 3.211m-6.043-8.215a3.211 3.211 0 0 1-6.422 0h0a3.21 3.21 0 0 1 3.211-3.211h0a3.21 3.21 0 0 1 3.211 3.21m-10.471.001a3.21 3.21 0 0 1-3.21 3.21h0a3.211 3.211 0 1 1 3.21-3.21"></svg:path>`,
})
export class ArcticonsPaintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
