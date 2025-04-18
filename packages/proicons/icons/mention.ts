import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMentionIcon],svg[proicons-mention-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.625 20.01A9.25 9.25 0 1 1 21.25 12v1.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V12m0 0a4.25 4.25 0 1 1-8.5 0a4.25 4.25 0 0 1 8.5 0m0 0V7.75"></svg:path>`,
})
export class ProiconsMentionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
