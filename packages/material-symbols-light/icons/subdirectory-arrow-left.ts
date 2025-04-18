import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSubdirectoryArrowLeftIcon],svg[material-symbols-light-subdirectory-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 20l-5-5l5.006-5.006l.707.714L6.922 14.5H17V5h1v10.5H6.921l3.793 3.787z"></svg:path>`,
})
export class MaterialSymbolsLightSubdirectoryArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
