import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGoToLineRoundedIcon],svg[material-symbols-go-to-line-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7q-.625 0-1.062-.437T10.5 5.5t.438-1.062T12 4t1.063.438T13.5 5.5t-.437 1.063T12 7m0 13q-.625 0-1.062-.437T10.5 18.5t.438-1.062T12 17t1.063.438t.437 1.062t-.437 1.063T12 20"></svg:path>`,
})
export class MaterialSymbolsGoToLineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
