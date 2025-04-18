import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsWelcomeWidgetsMenusIcon],svg[dashicons-welcome-widgets-menus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h15c.55 0 1-.45 1-1M4 4h13v4H4zm1 1v2h3V5zm4 0v2h3V5zm4 0v2h3V5zm-8.5 5c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M6 10h4v1H6zm6 0h5v5h-5zm-7.5 2c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M6 12h4v1H6zm7 0v2h3v-2zm-8.5 2c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M6 14h4v1H6z"></svg:path>`,
})
export class DashiconsWelcomeWidgetsMenusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
