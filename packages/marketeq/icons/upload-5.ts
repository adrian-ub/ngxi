import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUpload5Icon],svg[marketeq-upload-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 12.5L25 6.25l6.25 6.25M25 6.25v29.167"></svg:path><svg:path stroke="#306CFE" d="M41.667 35.417v6.25a2.083 2.083 0 0 1-2.084 2.083H10.417a2.083 2.083 0 0 1-2.084-2.083v-6.25"></svg:path></svg:g>`,
})
export class MarketeqUpload5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
