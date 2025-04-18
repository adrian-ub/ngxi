import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapHealthIcon],svg[map-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M49 17c0-.55-.45-1-1-1H35c-.55 0-1-.45-1-1V2c0-.55-.45-1-1-1H17c-.55 0-1 .45-1 1v13c0 .55-.45 1-1 1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h13c.55 0 1 .45 1 1v13c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V35c0-.55.45-1 1-1h13c.55 0 1-.45 1-1z"></svg:path>`,
})
export class MapHealthIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
