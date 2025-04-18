import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDoorHandleIcon],svg[marketeq-door-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#306CFE" stroke-width="2" d="M29.167 22.917v10.416a10.416 10.416 0 1 1-20.834 0V16.667A10.417 10.417 0 0 1 18.75 6.25v0a10.42 10.42 0 0 1 10.208 8.333"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M37.5 22.917H22.917a4.167 4.167 0 1 1 0-8.334H37.5a4.167 4.167 0 1 1 0 8.334"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M18.646 33.333h.208"></svg:path></svg:g>`,
})
export class MarketeqDoorHandleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
