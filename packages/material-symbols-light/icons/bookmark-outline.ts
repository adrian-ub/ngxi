import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBookmarkOutlineIcon],svg[material-symbols-light-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zM7 5h10z"></svg:path>`,
})
export class MaterialSymbolsLightBookmarkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
