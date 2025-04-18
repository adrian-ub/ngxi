import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAttachEmailOutlineSharpIcon],svg[material-symbols-attach-email-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11L3 6v10h10v2H1V2h20v7h-2V6zm0-2l8-5H3zm8 13q-1.65 0-2.825-1.175T15 18v-4.5q0-1.05.725-1.775T17.5 11t1.775.725T20 13.5V18h-2v-4.5q0-.2-.15-.35T17.5 13t-.35.15t-.15.35V18q0 .825.588 1.413T19 20t1.413-.587T21 18v-4h2v4q0 1.65-1.175 2.825T19 22M3 6V4v12z"></svg:path>`,
})
export class MaterialSymbolsAttachEmailOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
