import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteLetterBoldSolidIcon],svg[flowbite-letter-bold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5c0-.6.4-1 1-1h6.5a4.5 4.5 0 0 1 3.5 7.3a4.5 4.5 0 0 1-1.5 8.7H6a1 1 0 1 1 0-2h1V6H6a1 1 0 0 1-1-1m4 1v5h3.5a2.5 2.5 0 0 0 0-5zm0 7v5h5.5a2.5 2.5 0 0 0 0-5z" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteLetterBoldSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
