import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkPollIcon],svg[nrk-poll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 3h4v18h-4zM3 13h4v8H3zm18-5h-4v13h4z" clip-rule="evenodd"></svg:path>`,
})
export class NrkPollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
