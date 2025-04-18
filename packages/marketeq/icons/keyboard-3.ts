import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqKeyboard3Icon],svg[marketeq-keyboard-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M15.52 27.083h.21m18.75 0h-.21m-9.374 0h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M18.75 35.417h12.5"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M25 6.25v8.333m2.083 0h-4.166v4.167h4.166zM41.667 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083V20.833a2.083 2.083 0 0 1 2.083-2.083h33.334a2.083 2.083 0 0 1 2.083 2.083v20.834a2.083 2.083 0 0 1-2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqKeyboard3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
