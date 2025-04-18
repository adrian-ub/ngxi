import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEmojisurpriseIcon],svg[whh-emojisurprise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M288 256q-40 0-68 37.5T192 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m224 448q-53 0-90.5 28T384 800t37.5 68t90.5 28t90.5-28t37.5-68t-37.5-68t-90.5-28m224-448q-40 0-68 37.5T640 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5"></svg:path>`,
})
export class WhhEmojisurpriseIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
