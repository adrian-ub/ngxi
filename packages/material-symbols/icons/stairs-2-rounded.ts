import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStairs2RoundedIcon],svg[material-symbols-stairs-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19q-.425 0-.712-.288T2 18t.288-.712T3 17h5v-5q0-.425.288-.712T9 11h5V6q0-.425.288-.712T15 5h6q.425 0 .713.288T22 6t-.288.713T21 7h-5v5q0 .425-.288.713T15 13h-5v5q0 .425-.288.713T9 19z"></svg:path>`,
})
export class MaterialSymbolsStairs2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
