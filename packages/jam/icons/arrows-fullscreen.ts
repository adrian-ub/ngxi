import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowsFullscreenIcon],svg[jam-arrows-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3.414L11.414 10L18 16.586V13a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h3.586L10 11.414L3.414 18H7a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v3.586L8.586 10L2 3.414V7a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3.414L10 8.586L16.586 2H13a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamArrowsFullscreenIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
