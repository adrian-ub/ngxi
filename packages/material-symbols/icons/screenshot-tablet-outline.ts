import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScreenshotTabletOutlineIcon],svg[material-symbols-screenshot-tablet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zM4 6H3v12h1zm2 12h12V6H6zM20 6v12h1V6zm0 0h1zM4 6H3zm9 11h4v-4h-1.5v2.5H13zm-6-6h1.5V8.5H11V7H7z"></svg:path>`,
})
export class MaterialSymbolsScreenshotTabletOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
