import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHiveIcon],svg[material-symbols-hive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.275 11.5l-1.7-3l1.7-3h3.35l1.7 3l-1.7 3zm-5.95 3.5l-1.7-3l1.7-3h3.35l1.7 3l-1.7 3zm0-7l-1.7-3l1.7-3h3.35l1.7 3l-1.7 3zm-5.95 3.5l-1.7-3l1.7-3h3.35l1.625 3l-1.625 3zm0 7l-1.7-3l1.7-3h3.35l1.625 3l-1.625 3zm6.05 3.5l-1.8-3l1.7-3h3.35l1.7 3l-1.7 3zm5.85-3.5l-1.7-3l1.7-3h3.35l1.7 3l-1.7 3z"></svg:path>`,
})
export class MaterialSymbolsHiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
