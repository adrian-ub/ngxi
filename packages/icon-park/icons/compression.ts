import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCompressionIcon],svg[icon-park-compression-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M8.91962 8.7141C8.49508 7.38938 9.47567 6 10.8668 6H37.1332C38.5243 6 39.5049 7.38938 39.0804 8.7141C37.8993 12.3995 36 19.0894 36 24C36 28.9106 37.8993 35.6005 39.0804 39.2859C39.5049 40.6106 38.5243 42 37.1332 42H10.8668C9.47567 42 8.49508 40.6106 8.91962 39.2859C10.1007 35.6005 12 28.9106 12 24C12 19.0894 10.1007 12.3995 8.91962 8.7141Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M4 15C5.5 17 5.99988 21 5.99988 24C5.99988 27 5.5 31 4 33"></svg:path><svg:path stroke="#fff" d="M18 15.5H30"></svg:path><svg:path stroke="#fff" d="M18 24H30"></svg:path><svg:path stroke="#fff" d="M18 32H22"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M44 15C42.5 17 42.0001 21 42.0001 24C42.0001 27 42.5 30 44 33"></svg:path></svg:g>`,
})
export class IconParkCompressionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
