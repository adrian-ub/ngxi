import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoFileSharpIcon],svg[material-symbols-video-file-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V2h10l6 6v14zm9-13h5l-5-5zm-5 9h6v-2l2 1.05v-4.1L14 14v-2H8z"></svg:path>`,
})
export class MaterialSymbolsVideoFileSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
