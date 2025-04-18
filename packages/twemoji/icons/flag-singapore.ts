import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagSingaporeIcon],svg[twemoji-flag-singapore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#ED2939" d="M36 18V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v9z"></svg:path><svg:path fill="#FFF" d="M6 11.5c0-2.585 1.624-4.748 3.81-5.336A5.5 5.5 0 0 0 8.5 6a5.5 5.5 0 1 0 0 11c.452 0 .889-.06 1.31-.164C7.624 16.248 6 14.085 6 11.5"></svg:path><svg:path fill="#EEE" d="m12 7l.225.691h.726l-.588.427l.225.691L12 8.382l-.588.427l.225-.691l-.588-.427h.726zm-2 7l.225.691h.726l-.588.427l.225.691l-.588-.427l-.588.427l.225-.691l-.588-.427h.726zm4 0l.225.691h.726l-.588.427l.225.691l-.588-.427l-.588.427l.225-.691l-.588-.427h.726zm-5-4l.225.691h.726l-.588.427l.225.691L9 11.382l-.588.427l.225-.691l-.588-.427h.726zm6 0l.225.691h.726l-.588.427l.225.691l-.588-.427l-.588.427l.225-.691l-.588-.427h.726z"></svg:path>`,
})
export class TwemojiFlagSingaporeIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
