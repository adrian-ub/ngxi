import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandTwitchIcon],svg[tabler-brand-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5v11a1 1 0 0 0 1 1h2v4l4-4h5.584c.266 0 .52-.105.707-.293l2.415-2.414c.187-.188.293-.442.293-.708V5a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1zm12 3v4m-4-4v4"></svg:path>`,
})
export class TablerBrandTwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
