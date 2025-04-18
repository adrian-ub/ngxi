import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSubdirectoryArrowRightIcon],svg[material-symbols-light-subdirectory-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 20l-.713-.713l3.792-3.787H6V5h1v9.5h10.079l-3.792-3.792l.707-.714L19 15z"></svg:path>`,
})
export class MaterialSymbolsLightSubdirectoryArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
