import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoPerson28FilledIcon],svg[fluent-video-person-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.754 4a2.75 2.75 0 0 0-2.75 2.75v14.5A2.75 2.75 0 0 0 4.754 24H23.25A2.75 2.75 0 0 0 26 21.25V6.75A2.75 2.75 0 0 0 23.25 4zm-1.25 2.75c0-.69.56-1.25 1.25-1.25H23.25c.69 0 1.25.56 1.25 1.25v14.5c0 .69-.56 1.25-1.25 1.25H20v-4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v4H4.754c-.69 0-1.25-.56-1.25-1.25zM17.5 11.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path>`,
})
export class FluentVideoPerson28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
