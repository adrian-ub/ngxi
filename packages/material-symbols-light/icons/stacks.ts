import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStacksIcon],svg[material-symbols-light-stacks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.385L2.02 8.192L12 3l10 5.192zm0 3.807l-9.406-4.886l1.043-.573L12 16.052l8.383-4.32l1.042.574zM12 21l-9.406-4.887l1.043-.573L12 19.86l8.383-4.32l1.042.573z"></svg:path>`,
})
export class MaterialSymbolsLightStacksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
