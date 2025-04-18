import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignFlexEndRoundedIcon],svg[material-symbols-align-flex-end-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22q-.425 0-.712-.288T2 21t.288-.712T3 20h18q.425 0 .713.288T22 21t-.288.713T21 22zm8.5-4q-.425 0-.712-.288T10.5 17V5q0-.425.288-.712T11.5 4h1q.425 0 .713.288T13.5 5v12q0 .425-.288.713T12.5 18z"></svg:path>`,
})
export class MaterialSymbolsAlignFlexEndRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
