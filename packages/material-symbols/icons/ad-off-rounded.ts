import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAdOffRoundedIcon],svg[material-symbols-ad-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5.825L2.075 4.9Q1.8 4.625 1.8 4.212t.3-.712q.275-.275.7-.275t.7.275l17 17q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-.9-.9zm0-2h11.175L5 7.825zm15-2q-.375 0-.687-.262T19 15.975V8h-7.35q-.4 0-.763-.15t-.637-.425L7.525 4.7q-.25-.25-.288-.525t.088-.55t.35-.45T8.25 3H19q.825 0 1.413.588T21 5v11q0 .5-.312.75T20 17"></svg:path>`,
})
export class MaterialSymbolsAdOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
