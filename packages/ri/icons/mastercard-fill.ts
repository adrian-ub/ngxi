import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMastercardFillIcon],svg[ri-mastercard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 6.654a6.79 6.79 0 0 1 2.596 5.344A6.79 6.79 0 0 1 12 17.34a6.79 6.79 0 0 1-2.596-5.343A6.79 6.79 0 0 1 12 6.653m-.87-.582A7.78 7.78 0 0 0 8.402 12a7.78 7.78 0 0 0 2.728 5.926a6.798 6.798 0 1 1 .003-11.854m1.742 11.854A7.78 7.78 0 0 0 15.602 12a7.78 7.78 0 0 0-2.73-5.928a6.798 6.798 0 1 1 .003 11.854"></svg:path>`,
})
export class RiMastercardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
