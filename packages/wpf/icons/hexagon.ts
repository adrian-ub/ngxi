import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfHexagonIcon],svg[wpf-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a2 2 0 0 0-2 2c0 .183.016.363.063.531L1.968 11a2 2 0 0 0 0 4l4.093 7.469A2 2 0 0 0 6 23a2 2 0 0 0 2 2a1.98 1.98 0 0 0 1.719-1h6.562c.346.597.98 1 1.719 1a2 2 0 0 0 2-2a2 2 0 0 0-.063-.531L24.032 15a2 2 0 0 0 0-4l-4.093-7.469A2 2 0 0 0 20 3a2 2 0 0 0-2-2a1.98 1.98 0 0 0-1.719 1H9.72A1.98 1.98 0 0 0 8 1m1.719 3h6.562c.346.597.98 1 1.719 1c.148 0 .298 0 .438-.031l3.875 7A2 2 0 0 0 22 13c0 .38.129.729.313 1.031l-3.875 7c-.14-.03-.29-.031-.438-.031a1.98 1.98 0 0 0-1.719 1H9.72A1.98 1.98 0 0 0 8 21c-.148 0-.298 0-.438.031l-3.875-7C3.872 13.73 4 13.38 4 13s-.129-.729-.313-1.031l3.876-7c.139.03.289.031.437.031a1.98 1.98 0 0 0 1.719-1"></svg:path>`,
})
export class WpfHexagonIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
