import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiHammerIcon],svg[twemoji-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F4900C" d="M29.879 33.879C31.045 35.045 32.9 35.1 34 34s1.045-2.955-.121-4.121L12.121 8.121C10.955 6.955 9.1 6.9 8 8s-1.045 2.955.121 4.121z"></svg:path><svg:path fill="#66757F" d="M22 3s-6-3-11 2l-7 7s-1-1-2 0l-1 1s-1 1 0 2l4 4s1 1 2 0l1-1s1-1 0-2l-.078-.078c.77-.743 1.923-1.5 3.078-.922l4-4s-1-3 1-5s3-2 5-2s1-1 1-1"></svg:path>`,
})
export class TwemojiHammerIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
