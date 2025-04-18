import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsIcon],svg[ic-sharp-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.41 12L12 1.59L1.59 11.99L12 22.41zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5z"></svg:path>`,
})
export class IcSharpDirectionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
