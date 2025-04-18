import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatLetterSpacing2RoundedIcon],svg[material-symbols-format-letter-spacing-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.7 21.3q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.3-.3-.3-.7t.3-.7l2.6-2.6q.3-.3.7-.3t.7.3t.3.713t-.3.712L5.825 17h12.35l-.875-.875q-.275-.3-.287-.712t.287-.713t.7-.3t.7.3l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.3.3-.7.3t-.7-.3t-.3-.712t.3-.713l.875-.875H5.825l.875.875q.275.3.287.713T6.7 21.3m.65-9.5l3.425-9.2q.1-.275.338-.438T11.65 2h.7q.3 0 .538.163t.337.437l3.425 9.225q.15.425-.1.8t-.7.375q-.275 0-.512-.162T15 12.4l-.75-2.2H9.8L9 12.425q-.1.275-.325.425t-.5.15q-.475 0-.737-.387T7.35 11.8m3-3.2h3.3l-1.6-4.55h-.1z"></svg:path>`,
})
export class MaterialSymbolsFormatLetterSpacing2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
