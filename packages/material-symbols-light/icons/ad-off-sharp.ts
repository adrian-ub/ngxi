import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAdOffSharpIcon],svg[material-symbols-light-ad-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.41 20.83l-.831-.83H4V5.421l-.83-.836l.707-.708l16.246 16.246zM5 19h12.579L5 6.421zm15-1.825l-1-1V8.154h-8.021L6.825 4H20z"></svg:path>`,
})
export class MaterialSymbolsLightAdOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
