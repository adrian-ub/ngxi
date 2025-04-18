import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVillaOutlineIcon],svg[material-symbols-villa-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V8l13-5v9h1q0-.825.588-1.412T19 10t1.413.588T21 12v9zm2-2h4v-7h5V5.9L5 9.375zm6 0h3v-3h2v3h3v-5h-8zm4-.5"></svg:path>`,
})
export class MaterialSymbolsVillaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
