import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRuler10Icon],svg[marketeq-ruler-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 10.417V6.25m18.75 29.167h-4.167zm0-10.417h-4.167zM14.583 10.417V6.25z"></svg:path><svg:path stroke="#306CFE" d="M31.25 18.75L43.146 6.854M6.25 18.75V6.25h35.417a2.083 2.083 0 0 1 2.083 2.083V43.75h-12.5v-25z"></svg:path></svg:g>`,
})
export class MarketeqRuler10Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
