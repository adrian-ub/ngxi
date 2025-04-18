import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp4kPlusIcon],svg[ic-sharp-4k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM11 13.5h-1V15H8.5v-1.5h-3V9H7v3h1.5V9H10v3h1zm3.75 1.5L13 12.75V15h-1.5V9H13v2.25L14.75 9h1.75l-2.25 3l2.25 3zM19 12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z"></svg:path>`,
})
export class IcSharp4kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
