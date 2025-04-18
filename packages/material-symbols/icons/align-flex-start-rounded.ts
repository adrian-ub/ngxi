import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignFlexStartRoundedIcon],svg[material-symbols-align-flex-start-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4zm8.5 16q-.425 0-.712-.288T10.5 19V7q0-.425.288-.712T11.5 6h1q.425 0 .713.288T13.5 7v12q0 .425-.288.713T12.5 20z"></svg:path>`,
})
export class MaterialSymbolsAlignFlexStartRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
