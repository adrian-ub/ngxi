import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenRightOutlineSharpIcon],svg[material-symbols-light-splitscreen-right-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.385 20V4h6v16zm-8.77 0V4h6v16zm1-15v14h4V5zm4 14h-4z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenRightOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
