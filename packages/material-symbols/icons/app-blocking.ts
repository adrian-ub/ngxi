import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAppBlockingIcon],svg[material-symbols-app-blocking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v4h-2V6H7v12h10v-1h2v4q0 .825-.587 1.413T17 23zm11-7q-1.65 0-2.825-1.175T14 12t1.175-2.825T18 8t2.825 1.175T22 12t-1.175 2.825T18 16m0-1.5q.3 0 .588-.075t.562-.225l-3.35-3.35q-.15.275-.225.563T15.5 12q0 1.05.725 1.775T18 14.5m2.2-1.35q.15-.275.225-.562T20.5 12q0-1.05-.725-1.775T18 9.5q-.3 0-.587.075t-.563.225z"></svg:path>`,
})
export class MaterialSymbolsAppBlockingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
