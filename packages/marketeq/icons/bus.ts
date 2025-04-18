import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBusIcon],svg[marketeq-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M10.23 35.417H8.332a2.083 2.083 0 0 1-2.083-2.084V12.5a2.084 2.084 0 0 1 2.083-2.083h29.75a2.08 2.08 0 0 1 1.98 1.416l3.687 10.771l.104.646v10.083a2.083 2.083 0 0 1-2.083 2.084h-1.896"></svg:path><svg:path stroke="#306CFE" d="M6.25 22.917h37.5zm25 12.5H18.917zm-12.5-12.5h12.5v-12.5h-12.5z"></svg:path><svg:path stroke="#344054" d="M14.583 31.25a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334m20.834 0a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334"></svg:path></svg:g>`,
})
export class MarketeqBusIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
