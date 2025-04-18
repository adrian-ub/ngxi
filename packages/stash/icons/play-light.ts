import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPlayLightIcon],svg[stash-play-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 8.047c0-1.737 1.884-2.819 3.384-1.944l6.777 3.954c1.488.868 1.488 3.018 0 3.887l-6.777 3.953c-1.5.875-3.384-.207-3.384-1.944zm2.88-1.08a1.25 1.25 0 0 0-1.88 1.08v7.906a1.25 1.25 0 0 0 1.88 1.08l6.777-3.953a1.25 1.25 0 0 0 0-2.16z"></svg:path>`,
})
export class StashPlayLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
