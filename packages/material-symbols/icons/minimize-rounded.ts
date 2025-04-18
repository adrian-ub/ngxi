import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMinimizeRoundedIcon],svg[material-symbols-minimize-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21q-.425 0-.712-.288T6 20t.288-.712T7 19h10q.425 0 .713.288T18 20t-.288.713T17 21z"></svg:path>`,
})
export class MaterialSymbolsMinimizeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
