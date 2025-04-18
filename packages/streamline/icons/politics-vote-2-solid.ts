import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePoliticsVote2SolidIcon],svg[streamline-politics-vote-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.164 6.327l2.262-2.262a.5.5 0 0 0 0-.707L6.422.354a.5.5 0 0 0-.707 0L3.453 2.615a.5.5 0 0 0 0 .708l3.004 3.004a.5.5 0 0 0 .707 0m-4.892-.69h1.727l1.512 1.511h-1.22a.625.625 0 0 0 0 1.25h4.87a.625.625 0 0 0 0-1.25H8.11l1.511-1.512h1.557a1.5 1.5 0 0 1 1.5 1.5v2.617H.772V7.136a1.5 1.5 0 0 1 1.5-1.5Zm10.407 5.366H.772v2.47a.5.5 0 0 0 .5.5h10.907a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePoliticsVote2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
