import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSignalIcon],svg[marketeq-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#306CFE" stroke-width="2" d="M25 18.75v25"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M32.375 12.146a10.417 10.417 0 0 1 0 14.729m-14.75 0a10.417 10.417 0 0 1 0-14.73M38.25 6.25a18.75 18.75 0 0 1 0 26.52m-26.5 0a18.75 18.75 0 0 1 0-26.52"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M24.896 19.5h.208"></svg:path></svg:g>`,
})
export class MarketeqSignalIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
