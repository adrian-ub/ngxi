import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSubdirectoryArrowRightIcon],svg[material-symbols-subdirectory-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 21l-1.425-1.425l3.6-3.575H5V4h2v10h9.175l-3.6-3.6l1.4-1.425L20 15z"></svg:path>`,
})
export class MaterialSymbolsSubdirectoryArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
