import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTurnSlightRightRoundedIcon],svg[material-symbols-turn-slight-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20q-.425 0-.712-.288T9 19v-6.575q0-.4.15-.763t.425-.637L14.6 6h-1.25q-.425 0-.712-.287T12.35 5t.288-.712T13.35 4H17q.425 0 .713.288T18 5v3.65q0 .425-.288.713T17 9.65t-.712-.288T16 8.65V7.4l-5 5V19q0 .425-.288.713T10 20"></svg:path>`,
})
export class MaterialSymbolsTurnSlightRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
