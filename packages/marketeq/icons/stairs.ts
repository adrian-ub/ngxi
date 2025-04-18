import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqStairsIcon],svg[marketeq-stairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 37.5h16.666m-16.666-25h16.666zm0 8.333h16.666zm0 8.334h16.666z"></svg:path><svg:path stroke="#306CFE" d="M33.333 6.25v37.5M16.667 6.25v37.5z"></svg:path></svg:g>`,
})
export class MarketeqStairsIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
