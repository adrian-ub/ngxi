import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewSidebarRoundedIcon],svg[material-symbols-view-sidebar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8q-.425 0-.712-.288T18 7V5q0-.425.288-.712T19 4h2q.425 0 .713.288T22 5v2q0 .425-.288.713T21 8h-2Zm0 6q-.425 0-.712-.288T18 13v-2q0-.425.288-.712T19 10h2q.425 0 .713.288T22 11v2q0 .425-.288.713T21 14h-2ZM3 20q-.425 0-.712-.288T2 19V5q0-.425.288-.712T3 4h12q.425 0 .713.288T16 5v14q0 .425-.288.713T15 20H3Zm16 0q-.425 0-.712-.288T18 19v-2q0-.425.288-.712T19 16h2q.425 0 .713.288T22 17v2q0 .425-.288.713T21 20h-2Z"></svg:path>`,
})
export class MaterialSymbolsViewSidebarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
