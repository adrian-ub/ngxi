import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMobileSignalOneSolidIcon],svg[mynaui-mobile-signal-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiMobileSignalOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
