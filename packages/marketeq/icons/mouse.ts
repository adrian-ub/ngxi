import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMouseIcon],svg[marketeq-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 14.583v2.084"></svg:path><svg:path stroke="#306CFE" d="M25 6.25a13.79 13.79 0 0 1 13.77 14.583l-.583 10.417A13.187 13.187 0 0 1 25 43.75v0a13.187 13.187 0 0 1-13.187-12.5l-.584-10.417A13.79 13.79 0 0 1 25 6.25"></svg:path></svg:g>`,
})
export class MarketeqMouseIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
