import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkCheckRadioUncheckedIcon],svg[nrk-check-radio-unchecked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0 2a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class NrkCheckRadioUncheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
