import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMountainIcon],svg[marketeq-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.5 18.75a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5"></svg:path><svg:path stroke="#306CFE" d="M8.333 43.75h14.584l4.937-10.125L22.667 24A2.083 2.083 0 0 0 19 24zm30 0H22.917l9.375-19.23l7.916 16.23a2.083 2.083 0 0 1-1.875 3"></svg:path><svg:path stroke="#344054" d="M6.25 43.75h37.5"></svg:path></svg:g>`,
})
export class MarketeqMountainIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
