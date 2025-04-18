import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBirthdayCakeIcon],svg[marketeq-birthday-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 18.75v8.333M25 6.25s-4.167 4.875-4.167 8.333a4.167 4.167 0 1 0 8.334 0C29.167 11.125 25 6.25 25 6.25"></svg:path><svg:path stroke="#306CFE" d="M6.25 43.75h37.5m-2.083 0H8.333V29.167a2.084 2.084 0 0 1 2.084-2.084h29.166a2.083 2.083 0 0 1 2.084 2.084z"></svg:path></svg:g>`,
})
export class MarketeqBirthdayCakeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
