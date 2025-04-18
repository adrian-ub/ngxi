import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatLetterSpacingWiderRoundedIcon],svg[material-symbols-format-letter-spacing-wider-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20q-.425 0-.712-.288T2 19V5q0-.425.288-.712T3 4t.713.288T4 5v14q0 .425-.288.713T3 20m18 0q-.425 0-.712-.288T20 19V5q0-.425.288-.712T21 4t.713.288T22 5v14q0 .425-.288.713T21 20M8.525 17q-.425 0-.675-.35t-.1-.75l3.15-8.35q.1-.25.3-.4t.475-.15h.65q.275 0 .475.15t.3.4l3.15 8.375q.15.4-.087.737T15.5 17q-.275 0-.475-.15t-.3-.4l-.7-2h-4.05l-.725 2.025q-.075.25-.275.388t-.45.137m1.975-4h3l-1.45-4.15h-.1z"></svg:path>`,
})
export class MaterialSymbolsFormatLetterSpacingWiderRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
