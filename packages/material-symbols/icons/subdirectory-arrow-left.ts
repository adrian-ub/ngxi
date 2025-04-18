import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSubdirectoryArrowLeftIcon],svg[material-symbols-subdirectory-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 21l-6-6l6.025-6.025l1.4 1.425l-3.6 3.6H17V4h2v12H7.825l3.6 3.575z"></svg:path>`,
})
export class MaterialSymbolsSubdirectoryArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
