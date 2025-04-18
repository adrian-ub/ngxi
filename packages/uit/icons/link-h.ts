import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitLinkHIcon],svg[uit-link-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 16H7a4 4 0 1 1 0-8h3.5a.5.5 0 0 0 0-1H7a5 5 0 0 0 0 10h3.5a.5.5 0 0 0 0-1M8 12a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5m9-5h-3.5a.5.5 0 0 0 0 1H17a4 4 0 1 1 0 8h-3.5a.5.5 0 0 0 0 1H17a5 5 0 0 0 0-10"></svg:path>`,
})
export class UitLinkHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
