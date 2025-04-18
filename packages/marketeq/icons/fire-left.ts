import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFireLeftIcon],svg[marketeq-fire-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M25 43.75c8.125 0 14.583-4.167 14.583-14.583S29.167 18.75 29.167 6.25c-6.25 4.167-9.105 8.542-10.417 16.667a10.42 10.42 0 0 1-4.167-6.25C12.5 18.75 10.417 25 10.417 29.167c0 6.541 2.666 14.583 14.583 14.583"></svg:path>`,
})
export class MarketeqFireLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
