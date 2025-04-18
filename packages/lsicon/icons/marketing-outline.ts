import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMarketingOutlineIcon],svg[lsicon-marketing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 14.5h4M9 5L7.5 6.5l1 1L7 9m6-2.5v1c0 .8-.667 1.667-1 2L10.5 11l-.5 1.5H6L5.5 11L4 9.5c-.333-.333-1-1.2-1-2v-1a5 5 0 0 1 10 0Z"></svg:path>`,
})
export class LsiconMarketingOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
