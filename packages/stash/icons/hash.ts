import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashHashIcon],svg[stash-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.457 6.26a.75.75 0 0 1 .616.863l-.271 1.627h3.48l.312-1.873a.75.75 0 0 1 1.48.246l-.272 1.627H17a.75.75 0 0 1 0 1.5h-1.448l-.583 3.5h1.198a.75.75 0 0 1 0 1.5h-1.448l-.312 1.873a.75.75 0 0 1-1.48-.246l.271-1.627h-3.48l-.312 1.873a.75.75 0 1 1-1.48-.246l.272-1.627H7a.75.75 0 0 1 0-1.5h1.448l.583-3.5H7.833a.75.75 0 0 1 0-1.5h1.448l.313-1.873a.75.75 0 0 1 .863-.617m.095 3.99l-.583 3.5h3.479l.583-3.5z"></svg:path>`,
})
export class StashHashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
