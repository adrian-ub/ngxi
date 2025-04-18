import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPlayPauseIcon],svg[mdi-play-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14l8-7m2 7h3V5h-3m5 0v14h3V5"></svg:path>`,
})
export class MdiPlayPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
