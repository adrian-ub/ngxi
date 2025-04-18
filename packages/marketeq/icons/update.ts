import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUpdateIcon],svg[marketeq-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M8.333 25a16.667 16.667 0 0 1 31.105-8.333M41.667 25a16.667 16.667 0 0 1-31.104 8.333"></svg:path><svg:path stroke="#344054" d="M29.167 16.667h10.416V6.25m-18.75 27.083H10.417V43.75"></svg:path></svg:g>`,
})
export class MarketeqUpdateIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
