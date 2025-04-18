import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEMobiledataRoundedIcon],svg[material-symbols-e-mobiledata-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17q-.425 0-.712-.288T8 16V8q0-.425.288-.712T9 7h6q.425 0 .713.288T16 8t-.288.713T15 9h-5v2h5q.425 0 .713.288T16 12t-.288.713T15 13h-5v2h5q.425 0 .713.288T16 16t-.288.713T15 17z"></svg:path>`,
})
export class MaterialSymbolsEMobiledataRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
