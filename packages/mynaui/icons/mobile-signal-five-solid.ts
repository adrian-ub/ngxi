import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMobileSignalFiveSolidIcon],svg[mynaui-mobile-signal-five-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m-4.5 5a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m-4.5 4a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75m-4.5 4a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m-4.5 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiMobileSignalFiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
