import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqResearchIcon],svg[marketeq-research-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 25v10.417zm-8.334 10.417V31.25zM6.25 31.25l5.896-5.896zm10.417-16.667a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5"></svg:path><svg:path stroke="#306CFE" d="M16.667 6.25h25a2.083 2.083 0 0 1 2.083 2.083v33.334a2.083 2.083 0 0 1-2.083 2.083h-25a2.083 2.083 0 0 1-2.084-2.083v-6.25"></svg:path></svg:g>`,
})
export class MarketeqResearchIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
