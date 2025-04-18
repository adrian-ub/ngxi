import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAudioFileOutlineRoundedIcon],svg[material-symbols-audio-file-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 19q.95 0 1.6-.65t.65-1.6V13h2q.425 0 .713-.288T16 12t-.288-.712T15 11h-2q-.425 0-.712.288T12 12v2.875q-.275-.2-.587-.288t-.663-.087q-.95 0-1.6.65t-.65 1.6t.65 1.6t1.6.65M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V20q0 .825-.587 1.413T18 22zm7-14V4H6v16h12V9h-4q-.425 0-.712-.288T13 8M6 4v5zv16z"></svg:path>`,
})
export class MaterialSymbolsAudioFileOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
