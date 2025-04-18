import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCabinet4Icon],svg[marketeq-cabinet-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 25v-4.167m-6.25 18.75v4.167zm29.166 0v4.167zm-6.25-18.75V25z"></svg:path><svg:path stroke="#306CFE" d="M10.417 39.583h29.166a2.083 2.083 0 0 0 2.084-2.083V8.333a2.083 2.083 0 0 0-2.084-2.083H10.417a2.083 2.083 0 0 0-2.084 2.083V37.5a2.083 2.083 0 0 0 2.084 2.083m0 0H25V6.25H10.417a2.083 2.083 0 0 0-2.084 2.083V37.5a2.083 2.083 0 0 0 2.084 2.083"></svg:path></svg:g>`,
})
export class MarketeqCabinet4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
