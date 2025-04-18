import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineFactoryIcon],svg[ic-outline-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2V10l7-3v2l5-2v3h3l1-8h3l1 8zM12 9.95l-5 2V10l-3 1.32V20h16v-8h-8zM11 18h2v-4h-2zm-4 0h2v-4H7zm10-4h-2v4h2z"></svg:path>`,
})
export class IcOutlineFactoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
