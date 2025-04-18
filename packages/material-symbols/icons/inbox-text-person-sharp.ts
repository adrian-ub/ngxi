import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInboxTextPersonSharpIcon],svg[material-symbols-inbox-text-person-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20v-.575q0-.6.325-1.1t.9-.75q.7-.275 1.363-.425t1.487-.15q.725 0 1.425.15t1.275.425q.575.25.9.75t.325 1.1V20zm4-4q-.825 0-1.412-.587T16 14t.588-1.412T18 12t1.413.588T20 14t-.587 1.413T18 16M3 21V3h18v7.65q-.475-.225-.975-.363T19 10.076V5H5v9h4.2q.225.675.75 1.175t1.175.7q-.2 1.35.075 2.675T12.275 21zM7 8.75h10v-2H7zm0 3.5h5.925q.675-.725 1.513-1.225t1.812-.775H7z"></svg:path>`,
})
export class MaterialSymbolsInboxTextPersonSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
