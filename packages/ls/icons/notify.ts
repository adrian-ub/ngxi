import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsNotifyIcon],svg[ls-notify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 14h679v500H435l-96 166l-95-166H0z"></svg:path>`,
})
export class LsNotifyIcon {
  readonly viewBox = input("0 0 679 680")
  readonly width = input("1em")
  readonly height = input("1em")
}
