import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPauseSolidIcon],svg[stash-pause-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 5.5A1.75 1.75 0 0 0 7 7.25v9.5a1.75 1.75 0 1 0 3.5 0v-9.5A1.75 1.75 0 0 0 8.75 5.5m6.5 0a1.75 1.75 0 0 0-1.75 1.75v9.5a1.75 1.75 0 1 0 3.5 0v-9.5a1.75 1.75 0 0 0-1.75-1.75"></svg:path>`,
})
export class StashPauseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
