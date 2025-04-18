import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqHomeAlt3Icon],svg[marketeq-home-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M39.583 20.833v21.459a1.604 1.604 0 0 1-1.729 1.458h-8.062V29.375h-9.584V43.75h-8.062a1.605 1.605 0 0 1-1.73-1.458V20.833"></svg:path><svg:path stroke="#344054" d="M43.75 25L25 6.25L6.25 25"></svg:path></svg:g>`,
})
export class MarketeqHomeAlt3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
