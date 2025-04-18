import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLooks3Icon],svg[ic-sharp-looks-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3.01v18H21zm-5.99 14H9v-2h4v-2h-2v-2h2V9H9V7h6.01z"></svg:path>`,
})
export class IcSharpLooks3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
