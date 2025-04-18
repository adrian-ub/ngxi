import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitHorizontalAlignLeftIcon],svg[uit-horizontal-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 11H16V6.5a.5.5 0 0 0-.5-.5H3V2.5a.5.5 0 0 0-1 0v19a.5.5 0 1 0 1 0V18h18.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5M3 7h12v4H3zm18 10H3v-5h18z"></svg:path>`,
})
export class UitHorizontalAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
