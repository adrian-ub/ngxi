import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTauntIcon],svg[material-symbols-taunt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.45 14.475q-.6.325-1.275.138T3.15 13.85q-.425-.725-.15-1.5t1.075-1.05L12.5 8.5l.9 1.775zM6 21v-5.675l8.725-4.6l-.425-.875L20 7l.9 1.8L14 14v7zm1.5-11q-1.45 0-2.475-1.025T4 6.5t1.025-2.475T7.5 3t2.475 1.025T11 6.5T9.975 8.975T7.5 10"></svg:path>`,
})
export class MaterialSymbolsTauntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
