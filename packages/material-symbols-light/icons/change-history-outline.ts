import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChangeHistoryOutlineIcon],svg[material-symbols-light-change-history-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.808 19L12 5.885L20.192 19zM5.6 18h12.8L12 7.75zm6.4-5.125"></svg:path>`,
})
export class MaterialSymbolsLightChangeHistoryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
