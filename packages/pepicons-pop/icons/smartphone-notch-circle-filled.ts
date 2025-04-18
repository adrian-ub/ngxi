import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopSmartphoneNotchCircleFilledIcon],svg[pepicons-pop-smartphone-notch-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopSmartphoneNotchCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M9 3h9c1.105 0 2 .943 2 2.105v15.79C20 22.057 19.105 23 18 23H9c-1.105 0-2-.943-2-2.105V5.105C7 3.943 7.895 3 9 3m1 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1v1.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V5z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopSmartphoneNotchCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopSmartphoneNotchCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
