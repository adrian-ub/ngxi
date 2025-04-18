import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashMicSolidIcon],svg[stash-mic-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.25A3.25 3.25 0 0 0 8.75 6.5v6a3.25 3.25 0 0 0 6.5 0v-6A3.25 3.25 0 0 0 12 3.25"></svg:path><svg:path fill="currentColor" d="M7.75 12.5a.75.75 0 0 0-1.5 0a5.75 5.75 0 0 0 5 5.701v1.049H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-1.049a5.75 5.75 0 0 0 5-5.701a.75.75 0 0 0-1.5 0a4.25 4.25 0 0 1-8.5 0"></svg:path>`,
})
export class StashMicSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
