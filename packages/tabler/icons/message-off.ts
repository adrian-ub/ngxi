import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMessageOffIcon],svg[tabler-message-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h1m4 0h3m-8 4h5M8 4h10a3 3 0 0 1 3 3v8c0 .577-.163 1.116-.445 1.573M18 18h-5l-5 3v-3H6a3 3 0 0 1-3-3V7c0-1.085.576-2.036 1.439-2.562M3 3l18 18"></svg:path>`,
})
export class TablerMessageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
