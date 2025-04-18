import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVariableInsertOutlineIcon],svg[material-symbols-light-variable-insert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16V8h16v3.192h-1V9H5v6h9.577v1zm1-1V9zm16.677 4l-3.715-3.71v3.21h-1v-4.923h4.923v1h-3.216l3.697 3.735z"></svg:path>`,
})
export class MaterialSymbolsLightVariableInsertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
