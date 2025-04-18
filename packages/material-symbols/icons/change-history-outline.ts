import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChangeHistoryOutlineIcon],svg[material-symbols-change-history-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20L12 4l10 16zm3.6-2h12.8L12 7.75zm6.4-5.125"></svg:path>`,
})
export class MaterialSymbolsChangeHistoryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
