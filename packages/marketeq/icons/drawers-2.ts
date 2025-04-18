import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDrawers2Icon],svg[marketeq-drawers-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 37.5v4.167M10.417 37.5v4.167z"></svg:path><svg:path stroke="#306CFE" d="M6.25 8.333h37.5M10.417 37.5h29.166a2.083 2.083 0 0 0 2.084-2.083v-18.75H8.333v18.75a2.083 2.083 0 0 0 2.084 2.083m0 0H25V16.667H8.333v18.75a2.083 2.083 0 0 0 2.084 2.083M8.333 16.667h33.334V8.333H8.333z"></svg:path></svg:g>`,
})
export class MarketeqDrawers2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
