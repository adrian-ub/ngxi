import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTextRecognitionIcon],svg[icon-park-text-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 33V39C6 40.6569 7.34315 42 9 42H15"></svg:path><svg:path d="M33 42H39C40.6569 42 42 40.6569 42 39V33"></svg:path><svg:path d="M42 15V9C42 7.34315 40.6569 6 39 6H33"></svg:path><svg:path d="M6 15V9C6 7.34315 7.34315 6 9 6H15"></svg:path><svg:path d="M24 15V35"></svg:path><svg:path d="M17 15H24H31"></svg:path></svg:g>`,
})
export class IconParkTextRecognitionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
