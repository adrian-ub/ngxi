import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPauseLightIcon],svg[stash-pause-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7.25a1.75 1.75 0 1 1 3.5 0v9.5a1.75 1.75 0 1 1-3.5 0zm1.75-.75a.75.75 0 0 0-.75.75v9.5a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-.75-.75m4.75.75a1.75 1.75 0 1 1 3.5 0v9.5a1.75 1.75 0 1 1-3.5 0zm1.75-.75a.75.75 0 0 0-.75.75v9.5a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class StashPauseLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
