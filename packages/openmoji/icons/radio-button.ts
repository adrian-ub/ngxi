import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRadioButtonIcon],svg[openmoji-radio-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="36" r="22" fill="#3F3F3F"></svg:circle><svg:circle cx="36" cy="36" r="12.756" fill="#9B9B9A"></svg:circle></svg:g><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="36" r="22"></svg:circle><svg:circle cx="36" cy="36" r="12.756"></svg:circle></svg:g>`,
})
export class OpenmojiRadioButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
