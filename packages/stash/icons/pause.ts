import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPauseIcon],svg[stash-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 5.25a2 2 0 0 0-2 2v9.5a2 2 0 1 0 4 0v-9.5a2 2 0 0 0-2-2m-.5 2a.5.5 0 0 1 1 0v9.5a.5.5 0 0 1-1 0zm7-2a2 2 0 0 0-2 2v9.5a2 2 0 1 0 4 0v-9.5a2 2 0 0 0-2-2m-.5 2a.5.5 0 0 1 1 0v9.5a.5.5 0 0 1-1 0z"></svg:path>`,
})
export class StashPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
