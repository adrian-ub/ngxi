import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHealthyRecognitionIcon],svg[icon-park-healthy-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 33V39C6 40.6569 7.34315 42 9 42H15"></svg:path><svg:path d="M33 42H39C40.6569 42 42 40.6569 42 39V33"></svg:path><svg:path d="M42 15V9C42 7.34315 40.6569 6 39 6H33"></svg:path><svg:path d="M6 15V9C6 7.34315 7.34315 6 9 6H15"></svg:path><svg:path fill="#2F88FF" d="M34 24.0001L24 34.0001C24 34.0001 15.0002 25.0001 14 24.0001C12.9998 23.0001 12.5 21.0001 14 19.0001C15.5 17.0001 18.5 17.0001 20 18.0001C21.5001 19.0001 22.0001 20.0001 24 20.0001C26 20.0001 26.5001 19.0001 28 18.0001C29.5 17.0001 32.5003 17.0001 34.0003 19.0001C35.5003 21.0001 35 23.0001 34 24.0001Z"></svg:path></svg:g>`,
})
export class IconParkHealthyRecognitionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
