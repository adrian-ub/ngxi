import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightToolsLadderSharpIcon],svg[material-symbols-light-tools-ladder-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.873 20.5l4.73-17h.943l-.83 3h5.605l.844-3h.962l-4.73 17h-.943l.83-3H7.68l-.845 3zm3.468-9h5.6l1.113-4h-5.62zm-1.395 5h5.62l1.093-4h-5.6z"></svg:path>`,
})
export class MaterialSymbolsLightToolsLadderSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
