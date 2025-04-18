import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLibraryAddCheckIcon],svg[ic-sharp-library-add-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H6v16h16zm-9.53 12L9 10.5l1.4-1.41l2.07 2.08L17.6 6L19 7.41zM4 6H2v16h16v-2H4z"></svg:path>`,
})
export class IcSharpLibraryAddCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
