import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCircleloaderfullIcon],svg[whh-circleloaderfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-832q-87 0-160.5 43T235 351.5T192 512t43 160.5T351.5 789T512 832t160.5-43T789 672.5T832 512t-43-160.5T672.5 235T512 192"></svg:path>`,
})
export class WhhCircleloaderfullIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
