import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRuler7Icon],svg[marketeq-ruler-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 39.583v4.167M6.25 14.583h4.167zM6.25 25h4.167zm29.167 14.583v4.167z"></svg:path><svg:path stroke="#306CFE" d="M18.75 31.25L6.854 43.146M43.75 31.25v12.5H8.333a2.083 2.083 0 0 1-2.083-2.083V6.25h12.5v25z"></svg:path></svg:g>`,
})
export class MarketeqRuler7Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
