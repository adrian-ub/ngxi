import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextRotateVerticalIcon],svg[material-symbols-light-text-rotate-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.63 15.654l3.91-10.308h1l3.83 10.308h-1.015l-1.038-2.838h-4.631l-1.039 2.838zm2.374-3.708h3.992l-1.907-5.28h-.1zm-7.965 7.362L3.23 16.5l.708-.708l1.6 1.512V3.5h1v13.804l1.6-1.512l.707.708z"></svg:path>`,
})
export class MaterialSymbolsLightTextRotateVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
