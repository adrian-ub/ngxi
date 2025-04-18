import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsResponsiveLayoutRoundedIcon],svg[material-symbols-responsive-layout-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21q-.425 0-.712-.288T16 20V10q0-.825-.587-1.412T14 8h-3.5q-.425 0-.712-.288T9.5 7V4q0-.425.288-.712T10.5 3H20q.425 0 .713.288T21 4v16q0 .425-.288.713T20 21zm-6.5 0q-.425 0-.712-.288T9.5 20v-9q0-.425.288-.712T10.5 10H13q.425 0 .713.288T14 11v9q0 .425-.288.713T13 21zM4 21q-.425 0-.712-.288T3 20v-9q0-.425.288-.712T4 10h2.5q.425 0 .713.288T7.5 11v9q0 .425-.288.713T6.5 21z"></svg:path>`,
})
export class MaterialSymbolsResponsiveLayoutRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
