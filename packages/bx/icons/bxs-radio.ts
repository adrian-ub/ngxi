import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsRadioIcon],svg[bx-bxs-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20.249 5.025l-7.897-2.962l-.703 1.873L14.484 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7c0-1.02-.766-1.851-1.751-1.975zM10 17H6v-2h4v2zm6.5 1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5zm3.5-7H4V7h16v4z" fill="currentColor"></svg:path>`,
})
export class BxBxsRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
