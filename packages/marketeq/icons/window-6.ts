import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqWindow6Icon],svg[marketeq-window-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 22.917v8.333zm8.334-8.334H8.333v8.334h33.334z"></svg:path><svg:path stroke="#306CFE" d="M6.25 6.25h37.5m-2.083 0H8.333v37.5h33.334zM6.25 43.75h37.5z"></svg:path></svg:g>`,
})
export class MarketeqWindow6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
