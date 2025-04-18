import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBrightnessIcon],svg[marketeq-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m11.75 11.75l1.458 1.458M25 6.25v2.083zm13.25 5.5l-1.458 1.458zM43.75 25h-2.083zm-5.5 13.25l-1.458-1.458zM25 43.75v-2.083zm-13.25-5.5l1.458-1.458zM6.25 25h2.083z"></svg:path><svg:path stroke="#306CFE" d="M25 33.333a8.333 8.333 0 1 0 0-16.666a8.333 8.333 0 0 0 0 16.666"></svg:path></svg:g>`,
})
export class MarketeqBrightnessIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
