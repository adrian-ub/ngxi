import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiDolphinIcon],svg[arcticons-emoji-dolphin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.408 21.156c-.3 3.868 2.584 6.33 2.452 3.613c-.121-2.52 1.97-3.465 2.65-3.538l-.055-.074z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.03 21.99c2.093.834 4.546 2.493 6.314 5.789c.2.393.342.818.426 1.18c.712 2.748-3.767 1.652-4.516 3.568c-.273.7-.784 2.831-.383 3.116q.04.029.093.031c.13.006.32-.113.586-.406c1.4-1.042 3.395.347 4.745-.444c.544-.318.817-.831 1.013-1.217c.314.502.73 1.54 1.442 1.781c1.247.375 3.117.255 4.005 2.61c.81-2.47 1.619-4.232-1.398-6.312c-1.06-.718-2.683-1.825-2.723-2.802c-.006-.122.27-6.949-3.786-12.61c.142-1.514 1.239-3.61 2.791-3.951c1.396-.307-2.312-3.065-7.733-.6c-7.307-4.185-15.754.019-15.993 4.572c-2.123-.17-5.345.157-5.413 2.084c.01.372-.1 2.777 10.884 2.777h5.433l.038-.001"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.89 19.907c-.516.449-1.692 2.418-.153 4.417c2.248 2.918-5.476 1.218-5.16-6.25"></svg:path>`,
})
export class ArcticonsEmojiDolphinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
