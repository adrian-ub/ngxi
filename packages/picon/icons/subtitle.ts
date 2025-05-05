import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSubtitleIcon],svg[picon-subtitle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V0h8v8M5 5V4H1v1m6 2V6H3v1m4-2V4H6v1M2 7V6H1v1"></svg:path>`,
})
export class PiconSubtitleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
