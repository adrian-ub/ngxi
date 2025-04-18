import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsFoldingStoolPrintIcon],svg[pepicons-folding-stool-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".8"><svg:path fill-rule="evenodd" d="M5.25 11.5a1.5 1.5 0 0 1 1.5-1.5h10a1.5 1.5 0 0 1 0 3h-10a1.5 1.5 0 0 1-1.5-1.5Zm2.5-10a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.75 6.5a1 1 0 0 1 1 1V10a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1Zm8 0a1 1 0 0 1 1 1V10a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.75 1.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm1.825 17.565a1 1 0 0 1-1.39.26l-9.5-6.5a1 1 0 0 1 1.13-1.65l9.5 6.5a1 1 0 0 1 .26 1.39Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.925 19.065a1 1 0 0 0 1.39.26l9.5-6.5a1 1 0 1 0-1.13-1.65l-9.5 6.5a1 1 0 0 0-.26 1.39ZM15.75 5h-8V3h8v2Zm0 2.5h-8v-2h8v2Zm-12 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1Zm12 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z" clip-rule="evenodd"></svg:path><svg:path d="M7.75 7.5h8v3h-8v-3Zm0-4h8v3h-8v-3Z"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M4 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm2-9.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 6.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5Zm8 0a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14 1.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5Zm1.413 16.782a.5.5 0 0 1-.695.13l-9.5-6.5a.5.5 0 0 1 .564-.825l9.5 6.5a.5.5 0 0 1 .13.695Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4.587 18.282a.5.5 0 0 0 .695.13l9.5-6.5a.5.5 0 0 0-.564-.825l-9.5 6.5a.5.5 0 0 0-.13.695ZM14 4H6V3h8v1Zm0 3H6V6h8v1ZM2.5 8a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm11 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsFoldingStoolPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
