import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUserAllFilledIcon],svg[lsicon-user-all-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m10-1h-3V3h3zm0 2h-3V5h3zm0 2h-3V7h3zM2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserAllFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
