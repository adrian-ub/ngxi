import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewListIcon],svg[material-symbols-light-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 19h10.885q.666 0 1.14-.475t.475-1.14V14.98H8.5zM3 9.02h4.5V5H4.616q-.667 0-1.141.475T3 6.615zM3 14h4.5v-3.98H3zm1.616 5H7.5v-4.02H3v2.405q0 .666.475 1.14t1.14.475M8.5 14H21v-3.98H8.5zm0-4.98H21V6.614q0-.666-.475-1.14T19.386 5H8.5z"></svg:path>`,
})
export class MaterialSymbolsLightViewListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
