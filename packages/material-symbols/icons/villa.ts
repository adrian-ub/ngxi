import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVillaIcon],svg[material-symbols-villa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21v-9h8q0-.825.588-1.412T19 10t1.413.588T21 12v9h-5v-5h-2v5zm-6 0V8l13-5v7H7v11z"></svg:path>`,
})
export class MaterialSymbolsVillaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
