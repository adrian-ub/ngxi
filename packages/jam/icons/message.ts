import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMessageIcon],svg[jam-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.378 12H17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1a1 1 0 0 1 1 1v3.013zM3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.006V14a2 2 0 0 1-2-2V3a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamMessageIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
