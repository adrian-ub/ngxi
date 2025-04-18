import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqWashbasin4Icon],svg[marketeq-washbasin-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 27.083h-4.166m-8.334-8.333v-8.333a4.167 4.167 0 1 1 8.334 0"></svg:path><svg:path stroke="#306CFE" d="M8.333 43.75h33.334v-25H8.333zm-2.083-25h37.5zm2.083 25h12.5v-25h-12.5z"></svg:path></svg:g>`,
})
export class MarketeqWashbasin4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
