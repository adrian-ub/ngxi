import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRouter4Icon],svg[marketeq-router-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#306CFE" stroke-width="2" d="M33.333 18.75V8.333m6.25 35.417H10.417a2.083 2.083 0 0 1-2.084-2.083V20.833a2.083 2.083 0 0 1 2.084-2.083h29.166a2.083 2.083 0 0 1 2.084 2.083v20.834a2.084 2.084 0 0 1-2.084 2.083"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M16.667 27.083h4.166"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M33.23 7.292h.208"></svg:path></svg:g>`,
})
export class MarketeqRouter4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
