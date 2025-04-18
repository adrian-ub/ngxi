import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleOff20RegularIcon],svg[fluent-circle-off-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.708L2.147 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-1.854-1.855A8 8 0 0 1 4 4.707M14.585 15.29L4.709 5.416a7 7 0 0 0 9.874 9.874M17 10c0 1.39-.405 2.686-1.104 3.775l.722.721A8 8 0 0 0 5.504 3.382l.721.722A7 7 0 0 1 17 10"></svg:path>`,
})
export class FluentCircleOff20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
