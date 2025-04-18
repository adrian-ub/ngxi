import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTruckLiftIcon],svg[marketeq-truck-lift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M39.583 22.917H31.25m8.333 12.5V6.25zM10.417 6.25v29.167zm0 16.667h8.333z"></svg:path><svg:path stroke="#344054" d="M43.75 43.75H6.25V37.5a2.083 2.083 0 0 1 2.083-2.083h33.334A2.083 2.083 0 0 1 43.75 37.5z"></svg:path></svg:g>`,
})
export class MarketeqTruckLiftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
