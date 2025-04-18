import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFeedRocket16Icon],svg[octicon-feed-rocket-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m3.031-12a4.38 4.38 0 0 0-3.097 1.283l-.23.229q-.235.235-.452.49H5.65a.88.88 0 0 0-.746.417l-.856 1.388a.377.377 0 0 0 .21.556l1.552.477l1.35 1.35l.478 1.553a.374.374 0 0 0 .555.21l1.389-.855a.88.88 0 0 0 .416-.746V8.747q.255-.216.49-.452l.23-.23A4.38 4.38 0 0 0 12 4.969v-.093A.876.876 0 0 0 11.124 4Zm-5.107 7.144h-.001a.809.809 0 0 0-1.33-.881c-.395.394-.564 1.258-.62 1.62a.12.12 0 0 0 .035.108a.12.12 0 0 0 .108.035c.362-.056 1.226-.225 1.62-.619a.8.8 0 0 0 .188-.263"></svg:path>`,
})
export class OcticonFeedRocket16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
