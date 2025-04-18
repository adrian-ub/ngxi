import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineKeyboardArrowLeftIcon],svg[ic-outline-keyboard-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6z"></svg:path>`,
})
export class IcOutlineKeyboardArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
