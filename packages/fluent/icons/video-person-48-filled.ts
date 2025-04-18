import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoPerson48FilledIcon],svg[fluent-video-person-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 20a6 6 0 1 1-12 0a6 6 0 0 1 12 0M4 11.75A3.75 3.75 0 0 1 7.75 8h32.5A3.75 3.75 0 0 1 44 11.75v24.5A3.75 3.75 0 0 1 40.25 40H7.75A3.75 3.75 0 0 1 4 36.25zm3.75-1.25c-.69 0-1.25.56-1.25 1.25v24.5c0 .69.56 1.25 1.25 1.25H14v-6.25A3.25 3.25 0 0 1 17.25 28h13.5A3.25 3.25 0 0 1 34 31.25v6.25h6.25c.69 0 1.25-.56 1.25-1.25v-24.5c0-.69-.56-1.25-1.25-1.25z"></svg:path>`,
})
export class FluentVideoPerson48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
