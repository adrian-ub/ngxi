import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaRadioButtonOnOutlineIcon],svg[eva-radio-button-on-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M12 7a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class EvaRadioButtonOnOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
