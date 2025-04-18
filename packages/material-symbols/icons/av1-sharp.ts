import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAv1SharpIcon],svg[material-symbols-av1-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 15H6v-1.5h1.5V15H9V9H4.5zM6 12v-1.5h1.5V12zm5.75 3h1.5L15 9h-1.5l-1 3.425L11.5 9H10zM18 15h1.5V9h-3v1.5H18zM1 20V4h22v16z"></svg:path>`,
})
export class MaterialSymbolsAv1SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
