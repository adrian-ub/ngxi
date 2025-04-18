import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAdapter3Icon],svg[marketeq-adapter-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 31.25v12.5m12.5-33.333h6.25zm0 8.333h6.25z"></svg:path><svg:path stroke="#306CFE" d="M16.667 6.25h12.5a2.083 2.083 0 0 1 2.083 2.083v20.834a2.083 2.083 0 0 1-2.083 2.083H14.583a2.083 2.083 0 0 1-2.083-2.083v-18.75a4.167 4.167 0 0 1 4.167-4.167"></svg:path></svg:g>`,
})
export class MarketeqAdapter3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
