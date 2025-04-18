import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSignInDoubleArrow2Icon],svg[marketeq-sign-in-double-arrow-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 31.25L14.583 25l6.25-6.25m10.417 12.5L25 25l6.25-6.25M25 25h18.75"></svg:path><svg:path stroke="#306CFE" d="M14.583 8.333h-6.25a2.083 2.083 0 0 0-2.083 2.084v29.166a2.083 2.083 0 0 0 2.083 2.084h6.25"></svg:path></svg:g>`,
})
export class MarketeqSignInDoubleArrow2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
