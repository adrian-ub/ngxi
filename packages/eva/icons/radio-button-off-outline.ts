import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaRadioButtonOffOutlineIcon],svg[eva-radio-button-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a10 10 0 1 1 10-10a10 10 0 0 1-10 10m0-18a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class EvaRadioButtonOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
