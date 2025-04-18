import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlaylistPlayRoundedIcon],svg[material-symbols-playlist-play-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16q-.425 0-.712-.288T3 15t.288-.712T4 14h6q.425 0 .713.288T11 15t-.288.713T10 16zm0-4q-.425 0-.712-.288T3 11t.288-.712T4 10h10q.425 0 .713.288T15 11t-.288.713T14 12zm0-4q-.425 0-.712-.288T3 7t.288-.712T4 6h10q.425 0 .713.288T15 7t-.288.713T14 8zm12.775 12.475q-.125.075-.25.075t-.25-.05t-.2-.162t-.075-.263v-6.15q0-.15.075-.262t.2-.163t.25-.05t.25.075l4.6 3.05q.125.075.175.188t.05.237t-.05.238t-.175.187z"></svg:path>`,
})
export class MaterialSymbolsPlaylistPlayRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
