import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaRadioButtonOnFillIcon],svg[eva-radio-button-on-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M12 7a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path>`,
})
export class EvaRadioButtonOnFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
