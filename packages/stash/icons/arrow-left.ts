import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowLeftIcon],svg[stash-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.53 6.47a.75.75 0 0 1 0 1.06l-3.72 3.72H18a.75.75 0 0 1 0 1.5H7.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class StashArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
