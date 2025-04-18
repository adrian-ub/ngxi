import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPlayerStopIcon],svg[iconamoon-player-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="14" height="14" x="5" y="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="2"></svg:rect>`,
})
export class IconamoonPlayerStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
