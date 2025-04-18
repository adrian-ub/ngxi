import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBrunchDiningIcon],svg[ic-sharp-brunch-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h2V4h-2zm-2 14H2v-2h14zm2-6.11l-.4-.42a5.85 5.85 0 0 1-1.6-4V2h6v9.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h2v2h-4zM7 16v-2h4v2h5v2H2v-2z"></svg:path>`,
})
export class IcSharpBrunchDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
