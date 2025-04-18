import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMailLockSharpIcon],svg[material-symbols-mail-lock-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13l8-5V6l-8 5l-8-5v2zM2 20V4h20v6h-1q-2.075 0-3.537 1.463T16 15v5zm16 0v-5h1v-1q0-.825.588-1.412T21 12t1.413.588T23 14v1h1v5zm2-5h2v-1q0-.425-.288-.712T21 13t-.712.288T20 14z"></svg:path>`,
})
export class MaterialSymbolsMailLockSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
