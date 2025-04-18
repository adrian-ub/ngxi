import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTabIcon],svg[jam-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v1h-7V2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM4 0h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamTabIcon {
  readonly viewBox = input("0 0 20 16")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
