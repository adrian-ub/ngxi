import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPausePresentationSharpIcon],svg[material-symbols-light-pause-presentation-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.808 15.5h1v-7h-1zm3.384 0h1v-7h-1zM3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsLightPausePresentationSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
