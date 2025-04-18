import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteLetterUnderlineSolidIcon],svg[flowbite-letter-underline-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 6H9v8a3 3 0 1 0 6 0V6h-1a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-1v8a5 5 0 0 1-2 4h3a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h3a5 5 0 0 1-2-4V6H6a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteLetterUnderlineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
