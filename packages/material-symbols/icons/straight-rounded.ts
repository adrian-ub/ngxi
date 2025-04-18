import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStraightRoundedIcon],svg[material-symbols-straight-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 6.825l-.9.9Q9.825 8 9.413 8T8.7 7.7q-.275-.275-.275-.7t.275-.7l2.6-2.6q.3-.3.7-.3t.7.3l2.6 2.6q.275.275.287.687T15.3 7.7q-.275.275-.7.275t-.7-.275l-.9-.875V20q0 .425-.287.713T12 21t-.712-.288T11 20z"></svg:path>`,
})
export class MaterialSymbolsStraightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
