import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBdxIcon],svg[token-bdx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20.5a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m0 .5a8.998 8.998 0 0 0 8.315-12.444A9 9 0 1 0 12 21" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17 5.75v8.75a1 1 0 0 1-1 1h-5.5a1 1 0 0 1-1-1V9c0-.55.45-1 1-1h5.19zm-5.5 4.75a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 .5.5V13a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15 13a.5.5 0 0 1-.5.5h-3.53c-.47 0-1.04-.035-1.47-.75v1.75c0 .55.45 1 1 1H14c.62 0 1-.5 1-1z"></svg:path><svg:path fill="currentColor" d="M13 8h-2.5a1 1 0 0 0-1 1v3.75c.43.714 1 .75 1.47.75H12a.5.5 0 0 1-.5-.5v-2.5a.5.5 0 0 1 .5-.5h1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 8.249v8.75c0 .55.45 1 1 1H13a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1H7.81zm5.5 4.75a.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 15.25V17c0 .55.45 1 1 1H11c.6 0 1-.25 1-1v-1.5a.5.5 0 0 1-.5.5H7.75c-.5 0-.955-.16-1.25-.75"></svg:path><svg:path fill="currentColor" d="M10.5 10.499H7.81L6.5 8.249v7c.295.59.75.75 1.25.75H9a.5.5 0 0 1-.5-.5v-2.5a.5.5 0 0 1 .5-.5h1.5z"></svg:path>`,
})
export class TokenBdxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
