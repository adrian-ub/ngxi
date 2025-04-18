import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUser7Icon],svg[marketeq-user-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 28.542a14.58 14.58 0 0 0-8.334 13.125a2.083 2.083 0 0 0 2.084 2.083h29.166a2.084 2.084 0 0 0 2.084-2.083a14.58 14.58 0 0 0-8.334-13.188"></svg:path><svg:path stroke="#306CFE" d="M25 31.25c6.904 0 12.5-5.596 12.5-12.5S31.904 6.25 25 6.25s-12.5 5.596-12.5 12.5s5.596 12.5 12.5 12.5"></svg:path></svg:g>`,
})
export class MarketeqUser7Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
