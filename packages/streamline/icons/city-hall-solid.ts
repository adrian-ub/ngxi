import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCityHallSolidIcon],svg[streamline-city-hall-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .05a.75.75 0 0 0-.75.75v2.305L2.963 5.27a.5.5 0 0 0-.204.561l.001.002h8.644v-.002a.5.5 0 0 0-.203-.561L7.75 2.997V1.551h.621a.75.75 0 0 0 0-1.5zm6.242 8.51h-.196v3.934h.196a.75.75 0 0 1 0 1.5H.922a.75.75 0 0 1 0-1.5h.196V8.559H.922a.75.75 0 1 1 0-1.5h12.32a.75.75 0 0 1 0 1.5Zm-2.106 0h-1.25v3.934h1.25V8.559Zm-7.022 0h-1.25v3.934h1.25V8.559Zm3.843 3.934v-2.11a.93.93 0 1 0-1.862 0v2.11z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCityHallSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
