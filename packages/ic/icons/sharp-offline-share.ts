import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpOfflineShareIcon],svg[ic-sharp-offline-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5H4v18h12v-2H6z"></svg:path><svg:path fill="currentColor" d="M20 1H8v18h12zm-2 14h-8V5h8z"></svg:path><svg:path fill="currentColor" d="M12.5 10.25h2V12L17 9.5L14.5 7v1.75H11V12h1.5z"></svg:path>`,
})
export class IcSharpOfflineShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
