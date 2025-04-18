import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCollectionsBookmarkIcon],svg[material-symbols-light-collections-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.116 20q-.691 0-1.153-.462T3.5 18.385V6.615h1v11.77q0 .23.192.423t.423.192h11.77v1zm3-3q-.691 0-1.153-.462T6.5 15.385V4.615q0-.69.463-1.153T8.116 3h10.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T18.884 17zm5.384-6.884l2-1.193l2 1.193V4h-4z"></svg:path>`,
})
export class MaterialSymbolsLightCollectionsBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
