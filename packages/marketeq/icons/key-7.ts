import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqKey7Icon],svg[marketeq-key-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 33.333h4.167M25 18.75v25zm0 22.917h4.167z"></svg:path><svg:path stroke="#306CFE" d="M25 18.75a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5"></svg:path></svg:g>`,
})
export class MarketeqKey7Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
