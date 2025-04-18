import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusDesktopIcon],svg[nimbus-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 1.5H1.75A1.25 1.25 0 0 0 .5 2.75v7.5a1.25 1.25 0 0 0 1.25 1.25H6.1v1.75H4v1.25h8v-1.25H9.91V11.5h4.34a1.25 1.25 0 0 0 1.25-1.25v-7.5a1.25 1.25 0 0 0-1.25-1.25M8.66 13.25H7.35V11.5h1.31zm5.59-3H1.75v-7.5h12.5z"></svg:path>`,
})
export class NimbusDesktopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
