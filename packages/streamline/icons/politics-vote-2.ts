import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePoliticsVote2Icon],svg[streamline-politics-vote-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.406 6.136H2.272a1 1 0 0 0-1 1v3.128h10.907V7.136a1 1 0 0 0-1-1H8.047M1.272 13.3v-3.036h10.907V13.3"></svg:path><svg:path d="M9.34 4.843L7.08 7.105a.5.5 0 0 1-.707 0L3.368 4.1a.5.5 0 0 1 0-.707L5.63 1.131a.5.5 0 0 1 .707 0L9.34 4.136a.5.5 0 0 1 0 .707M4.87 8.2h3.71"></svg:path></svg:g>`,
})
export class StreamlinePoliticsVote2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
