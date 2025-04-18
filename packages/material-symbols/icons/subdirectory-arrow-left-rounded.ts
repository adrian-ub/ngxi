import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSubdirectoryArrowLeftRoundedIcon],svg[material-symbols-subdirectory-arrow-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.825 16l2.875 2.875q.3.3.313.7t-.288.7t-.712.3t-.713-.3L4.7 15.7q-.15-.15-.213-.325T4.426 15t.063-.375t.212-.325l4.625-4.625q.3-.3.7-.287t.7.312q.275.3.287.7t-.287.7l-2.9 2.9H17V5q0-.425.288-.712T18 4t.713.288T19 5v9q0 .825-.587 1.413T17 16z"></svg:path>`,
})
export class MaterialSymbolsSubdirectoryArrowLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
