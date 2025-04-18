import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCodeIcon],svg[material-symbols-light-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17.308L2.692 12L8 6.692l.714.714l-4.6 4.6L8.708 16.6zm8 0l-.713-.714l4.6-4.6L15.292 7.4L16 6.692L21.308 12z"></svg:path>`,
})
export class MaterialSymbolsLightCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
