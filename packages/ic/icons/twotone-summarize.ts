import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSummarizeIcon],svg[ic-twotone-summarize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5H5v14h14v-9h-5zM8 17c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1" opacity=".3"></svg:path><svg:circle cx="8" cy="8" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9zm4 16H5V5h9v5h5z"></svg:path><svg:circle cx="8" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="16" r="1" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneSummarizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
