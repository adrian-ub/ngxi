import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLooks6Icon],svg[ic-sharp-looks-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h2v-2h-2zM21 3H3v18h18zm-6 6h-4v2h4v6H9V7h6z"></svg:path>`,
})
export class IcSharpLooks6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
