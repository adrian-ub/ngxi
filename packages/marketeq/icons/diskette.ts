import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDisketteIcon],svg[marketeq-diskette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 31.25H16.667v12.5h16.666zm-2.083-25h-12.5v8.333h12.5z"></svg:path><svg:path stroke="#306CFE" d="M41.667 14.583v27.084a2.083 2.083 0 0 1-2.084 2.083H10.417a2.083 2.083 0 0 1-2.084-2.083V8.333a2.083 2.083 0 0 1 2.084-2.083h22.916z"></svg:path></svg:g>`,
})
export class MarketeqDisketteIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
