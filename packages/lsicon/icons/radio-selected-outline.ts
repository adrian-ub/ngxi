import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRadioSelectedOutlineIcon],svg[lsicon-radio-selected-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path><svg:path d="M6 8a2 2 0 1 1 4 0a2 2 0 0 1-4 0Z"></svg:path><svg:path d="M5.5 8a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0Z"></svg:path><svg:path d="M7 8a1 1 0 1 1 2 0a1 1 0 0 1-2 0Z"></svg:path><svg:path d="M7.5 8a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Z"></svg:path></svg:g>`,
})
export class LsiconRadioSelectedOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
