import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMicIcon],svg[marketeq-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M38 33.333a16.668 16.668 0 0 1-26 0m13 6.25v4.167"></svg:path><svg:path stroke="#306CFE" d="M25 31.25a8.334 8.334 0 0 1-8.333-8.333v-8.334A8.333 8.333 0 0 1 25 6.25v0a8.333 8.333 0 0 1 8.333 8.333v8.334A8.333 8.333 0 0 1 25 31.25"></svg:path></svg:g>`,
})
export class MarketeqMicIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
