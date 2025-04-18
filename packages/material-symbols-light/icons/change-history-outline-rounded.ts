import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChangeHistoryOutlineRoundedIcon],svg[material-symbols-light-change-history-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.262 19q-.48 0-.702-.416q-.223-.417.025-.82l6.738-10.78q.243-.378.677-.378t.677.378l6.739 10.78q.248.403.025.82q-.224.416-.703.416zm.338-1h12.8L12 7.75zm6.4-5.125"></svg:path>`,
})
export class MaterialSymbolsLightChangeHistoryOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
