import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIosShareIcon],svg[material-symbols-ios-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 23q-.825 0-1.412-.587T4 21V10q0-.825.588-1.412T6 8h3v2H6v11h12V10h-3V8h3q.825 0 1.413.588T20 10v11q0 .825-.587 1.413T18 23zm5-7V4.825l-1.6 1.6L8 5l4-4l4 4l-1.4 1.425l-1.6-1.6V16z"></svg:path>`,
})
export class MaterialSymbolsIosShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
