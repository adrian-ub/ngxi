import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWbIncandescentIcon],svg[ic-sharp-wb-incandescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.55 19.09l1.41 1.41l1.79-1.8l-1.41-1.41zM11 23h2v-2.95h-2zM4 11.05H1v2h3zm11-4.19V2.05H9v4.81C7.21 7.9 6 9.83 6 12.05c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19m5 4.19v2h3v-2zm-2.76 7.66l1.79 1.8l1.41-1.41l-1.8-1.79z"></svg:path>`,
})
export class IcSharpWbIncandescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
