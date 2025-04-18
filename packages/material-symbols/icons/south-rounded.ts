import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSouthRoundedIcon],svg[material-symbols-south-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.575q-.2 0-.375-.062T11.3 21.3l-5.6-5.6q-.275-.275-.275-.7t.275-.7q.3-.3.713-.287t.687.287l3.9 3.875V3q0-.425.288-.712T12 2t.713.288T13 3v15.175l3.875-3.875q.3-.3.713-.3t.712.3q.275.3.275.713t-.275.687l-5.6 5.6q-.15.15-.325.213t-.375.062"></svg:path>`,
})
export class MaterialSymbolsSouthRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
