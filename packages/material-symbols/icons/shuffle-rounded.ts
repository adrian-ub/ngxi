import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShuffleRoundedIcon],svg[material-symbols-shuffle-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20q-.425 0-.712-.288T14 19t.288-.712T15 18h1.6l-2.475-2.475q-.3-.3-.287-.712t.312-.713t.713-.3t.712.3L18 16.55V15q0-.425.288-.712T19 14t.713.288T20 15v4q0 .425-.288.713T19 20zm-10.7-.3q-.275-.275-.275-.7t.275-.7L16.6 6H15q-.425 0-.712-.288T14 5t.288-.712T15 4h4q.425 0 .713.288T20 5v4q0 .425-.288.713T19 10t-.712-.288T18 9V7.4L5.7 19.7q-.275.275-.7.275t-.7-.275m-.025-14Q4 5.425 4 5t.275-.7t.687-.275t.713.275l4.2 4.175q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"></svg:path>`,
})
export class MaterialSymbolsShuffleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
