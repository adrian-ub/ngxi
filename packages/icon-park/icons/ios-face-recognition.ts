import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIosFaceRecognitionIcon],svg[icon-park-ios-face-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 34V44H14"></svg:path><svg:path d="M34 44H44V34"></svg:path><svg:path d="M34 4H44V14"></svg:path><svg:path d="M14 4H4V14"></svg:path><svg:path d="M16 34C16 34 19 37 24 37C29 37 32 34 32 34"></svg:path><svg:path d="M24 14V23C24 25 22 27 20 27H19"></svg:path><svg:path d="M34 14V16"></svg:path><svg:path d="M14 14V16"></svg:path></svg:g>`,
})
export class IconParkIosFaceRecognitionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
