import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDifferenceSetIcon],svg[icon-park-difference-set-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 40V19C6 17.8954 6.89543 17 8 17H15C16.1046 17 17 17.8954 17 19V29C17 30.1046 17.8954 31 19 31H29C30.1046 31 31 31.8954 31 33V40C31 41.1046 30.1046 42 29 42H8C6.89543 42 6 41.1046 6 40Z"></svg:path><svg:path d="M42 8V29C42 30.1046 41.1046 31 40 31H33C31.8954 31 31 30.1046 31 29V19C31 17.8954 30.1046 17 29 17H19C17.8954 17 17 16.1046 17 15V8C17 6.89543 17.8954 6 19 6H40C41.1046 6 42 6.89543 42 8Z"></svg:path></svg:g>`,
})
export class IconParkDifferenceSetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
