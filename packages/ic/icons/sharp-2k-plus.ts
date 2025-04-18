import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp2kPlusIcon],svg[ic-sharp-2k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-11 9.5H7.5v1H10V15H6v-3.5h2.5v-1H6V9h4zm4.25 2.5l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3L16 15zM19 12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z"></svg:path>`,
})
export class IcSharp2kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
