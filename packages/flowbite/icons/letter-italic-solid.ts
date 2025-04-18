import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteLetterItalicSolidIcon],svg[flowbite-letter-italic-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 4h-3.3a1 1 0 1 0 0 2h1.8L8.2 18H6a1 1 0 1 0 0 2h6.3a1 1 0 1 0 0-2h-1.9l5.3-12H18a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteLetterItalicSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
