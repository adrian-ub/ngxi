import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoLetterAIcon],svg[noto-letter-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40C0E7" d="M115.37 117.77L77.78 17.81a2.24 2.24 0 0 0-2.1-1.45H52.32c-.94 0-1.77.58-2.1 1.45l-37.59 99.96c-.26.69-.17 1.46.25 2.06s1.1.97 1.84.97h24.64c.96 0 1.82-.62 2.13-1.54l5.7-17.18H80.8l5.71 17.18c.3.92 1.16 1.54 2.13 1.54h24.64a2.236 2.236 0 0 0 2.09-3.03m-61.14-36.9L64 51.45l9.77 29.43H54.23z"></svg:path>`,
})
export class NotoLetterAIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
