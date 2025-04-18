import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBedIcon],svg[marketeq-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M8.333 37.5v-4.167m6.25-18.75A2.083 2.083 0 0 0 12.5 12.5H8.333a2.083 2.083 0 0 0-2.083 2.083V25h8.333zM41.667 37.5v-4.167z"></svg:path><svg:path stroke="#306CFE" d="M6.25 25h35.417a2.083 2.083 0 0 1 2.083 2.083v6.25H6.25z"></svg:path></svg:g>`,
})
export class MarketeqBedIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
