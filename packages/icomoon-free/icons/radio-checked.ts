import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeRadioCheckedIcon],svg[icomoon-free-radio-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12M5 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path>`,
})
export class IcomoonFreeRadioCheckedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
