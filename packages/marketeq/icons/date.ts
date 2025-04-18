import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDateIcon],svg[marketeq-date-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M41.667 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083V20.833h37.5v20.834a2.083 2.083 0 0 1-2.083 2.083M43.75 12.5a2.083 2.083 0 0 0-2.083-2.083H8.333A2.083 2.083 0 0 0 6.25 12.5v8.333h37.5z"></svg:path><svg:path stroke="#344054" d="M33.333 6.25v8.333M16.667 6.25v8.333"></svg:path></svg:g>`,
})
export class MarketeqDateIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
