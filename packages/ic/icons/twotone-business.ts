import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBusinessIcon],svg[ic-twotone-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h2v2h-2v2h2v2h-2v2h8V9h-8zm4 0h2v2h-2zm0 4h2v2h-2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M16 15h2v2h-2zm0-4h2v2h-2zm6-4H12V3H2v18h20zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8z"></svg:path>`,
})
export class IcTwotoneBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
