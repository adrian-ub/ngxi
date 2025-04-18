import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqWindow5Icon],svg[marketeq-window-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 39.583H10.417V6.25H22.02"></svg:path><svg:path stroke="#306CFE" d="M30.708 27.646C25 32.687 25 43.75 25 43.75h12.5a2.083 2.083 0 0 0 2.083-2.083V8.333A2.083 2.083 0 0 0 37.5 6.25H22.02a28.895 28.895 0 0 0 17.563 27.083"></svg:path></svg:g>`,
})
export class MarketeqWindow5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
