import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDeltaIcon],svg[marketeq-delta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M39.583 43.75L23.958 8.604zm2.084 0L25 6.25L8.333 43.75z"></svg:path>`,
})
export class MarketeqDeltaIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
