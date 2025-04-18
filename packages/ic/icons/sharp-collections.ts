import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCollectionsIcon],svg[ic-sharp-collections-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18V2H6v16zm-11-6l2.03 2.71L16 11l4 5H8zM2 6v16h16v-2H4V6z"></svg:path>`,
})
export class IcSharpCollectionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
