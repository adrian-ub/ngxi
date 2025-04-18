import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDomeIcon],svg[marketeq-dome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 27.083h-8.334v12.5h8.334z"></svg:path><svg:path stroke="#306CFE" d="M6.25 39.583h37.5m-2.083 0H8.333v-12.5A16.667 16.667 0 0 1 25 10.417v0a16.667 16.667 0 0 1 16.667 16.666z"></svg:path></svg:g>`,
})
export class MarketeqDomeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
