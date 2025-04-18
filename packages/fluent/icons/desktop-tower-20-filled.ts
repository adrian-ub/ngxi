import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopTower20FilledIcon],svg[fluent-desktop-tower-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2.085A1.5 1.5 0 0 1 7.5 16H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3a2 2 0 0 0-2-2zm3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v2H7.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H14v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm6 12h-3v-2h3z"></svg:path>`,
})
export class FluentDesktopTower20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
