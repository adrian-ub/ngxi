import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLemonSliceFilledIcon],svg[tdesign-lemon-slice-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.76 10.802L0 17.562l1.412 1.412a11.94 11.94 0 0 0 6.054 3.267zm2.725 11.679c2.895.1 5.82-.844 8.162-2.83l-8.886-8.886zm9.576-4.244a11.97 11.97 0 0 0 2.83-8.161L10.175 9.35zm2.589-10.18a11.94 11.94 0 0 0-3.267-6.054L16.97.591L10.21 7.35z"></svg:path>`,
})
export class TdesignLemonSliceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
