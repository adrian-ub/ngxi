import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riListRadioIcon],svg[ri-list-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 7a2 2 0 1 0-4 0a2 2 0 0 0 4 0m2 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0M21 4h-8v2h8zm0 7h-8v2h8zm0 7h-8v2h8zM6.5 19a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 2a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-13a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiListRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
