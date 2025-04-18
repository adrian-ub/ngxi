import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqHomeAlt2Icon],svg[marketeq-home-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M39.583 20.833V43.75H29.167V29.167h-8.334V43.75H10.417V20.833L25 6.25z"></svg:path>`,
})
export class MarketeqHomeAlt2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
