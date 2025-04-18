import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSaveAsIcon],svg[ic-sharp-save-as-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12.4V7l-4-4H3v18h9.4zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3M6 6h9v4H6zm13.99 10.25l1.77 1.77L16.77 23H15v-1.77zm3.62-.09l-1.2 1.2l-1.77-1.77l1.2-1.2z"></svg:path>`,
})
export class IcSharpSaveAsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
