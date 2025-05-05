import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconVoteIcon],svg[picon-vote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7l2-2h4l2 2v1M3 0v3h3L4 2M1 2l2-2l3 3l-2 2M2 6L1 7h6L6 6"></svg:path>`,
})
export class PiconVoteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
