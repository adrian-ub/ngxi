import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuestmobileIcon],svg[arcticons-questmobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.033 8.667L4.5 39.333l39-.067Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.536 15.895c-5.95.628-15.44 15.854-13.035 23.305m8.288.111c5.948-3.93 8.33-9.48 9.497-16.066m-7.375 8.195l4.597 7.773"></svg:path>`,
})
export class ArcticonsQuestmobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
