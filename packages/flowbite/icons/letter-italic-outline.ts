import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteLetterItalicOutlineIcon],svg[flowbite-letter-italic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.874 19l6.143-14M6 19h6.33m-.66-14H18"></svg:path>`,
})
export class FlowbiteLetterItalicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
