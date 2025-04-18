import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSlackIcon],svg[hugeicons-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9.25v-5.5a1.75 1.75 0 1 1 3.5 0v5.5a1.75 1.75 0 1 1-3.5 0m-5.5 11v-5.5a1.75 1.75 0 1 1 3.5 0v5.5a1.75 1.75 0 1 1-3.5 0M14.75 13h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 1 1 0-3.5m-11-5.5h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 1 1 0-3.5M7 3.75c0 .966.784 1.75 1.75 1.75h1.75V3.75a1.75 1.75 0 1 0-3.5 0m10 16.5a1.75 1.75 0 0 0-1.75-1.75H13.5v1.75a1.75 1.75 0 1 0 3.5 0M20.25 7a1.75 1.75 0 0 0-1.75 1.75v1.75h1.75a1.75 1.75 0 1 0 0-3.5M3.75 17a1.75 1.75 0 0 0 1.75-1.75V13.5H3.75a1.75 1.75 0 1 0 0 3.5" color="currentColor"></svg:path>`,
})
export class HugeiconsSlackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
