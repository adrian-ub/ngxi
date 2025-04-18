import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBathroom2Icon],svg[marketeq-bathroom-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M33.333 12.5v-2.083a4.167 4.167 0 0 0-4.166-4.167H18.75a4.167 4.167 0 0 0-4.167 4.167V43.75"></svg:path><svg:path stroke="#306CFE" d="M39.583 20.833h-12.5V18.75a6.25 6.25 0 0 1 6.25-6.25v0a6.25 6.25 0 0 1 6.25 6.25z"></svg:path><svg:path stroke="#344054" d="M29.167 33.333v-4.166M10.417 43.75h8.333zM37.5 33.333v-4.166z"></svg:path></svg:g>`,
})
export class MarketeqBathroom2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
