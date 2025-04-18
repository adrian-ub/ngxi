import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowUpIcon],svg[stash-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.47 5.47a.753.753 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72V18a.75.75 0 0 1-1.5 0V7.81l-3.72 3.72a.75.75 0 0 1-1.06-1.06z"></svg:path>`,
})
export class StashArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
