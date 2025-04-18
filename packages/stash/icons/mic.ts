import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashMicIcon],svg[stash-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 6.5a3.25 3.25 0 0 1 6.5 0v6a3.25 3.25 0 0 1-6.5 0zM12 4.75a1.75 1.75 0 0 0-1.75 1.75v6a1.75 1.75 0 1 0 3.5 0v-6A1.75 1.75 0 0 0 12 4.75m-5 7a.75.75 0 0 1 .75.75a4.25 4.25 0 0 0 8.5 0a.75.75 0 0 1 1.5 0a5.75 5.75 0 0 1-5 5.701v1.049H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.049a5.75 5.75 0 0 1-5-5.701a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StashMicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
