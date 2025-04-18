import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPocketWatchFIcon],svg[jam-pocket-watch-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13v-3a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2zM5 5.732V5a1 1 0 1 1 2 0v.732a2 2 0 1 0-2 0M6 20A6 6 0 1 1 6 8a6 6 0 0 1 0 12M2.959 6.598a4 4 0 1 1 6.082 0A8 8 0 0 0 6 6a8 8 0 0 0-3.041.598"></svg:path>`,
})
export class JamPocketWatchFIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
