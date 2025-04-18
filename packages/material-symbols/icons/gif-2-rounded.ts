import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGif2RoundedIcon],svg[material-symbols-gif-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.825 0-1.412-.587T2 15V9q0-.825.588-1.412T4 7h5q.425 0 .713.288T10 8t-.288.713T9 9H4v6h4v-2H7q-.425 0-.712-.288T6 12t.288-.712T7 11h2q.425 0 .713.288T10 12v3q0 .825-.587 1.413T8 17zm8-1V8q0-.425.288-.712T13 7t.713.288T14 8v8q0 .425-.288.713T13 17t-.712-.288T12 16m4 0V8q0-.425.288-.712T17 7h5q.425 0 .713.288T23 8t-.288.713T22 9h-4v2h3q.425 0 .713.288T22 12t-.288.713T21 13h-3v3q0 .425-.288.713T17 17t-.712-.288T16 16"></svg:path>`,
})
export class MaterialSymbolsGif2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
