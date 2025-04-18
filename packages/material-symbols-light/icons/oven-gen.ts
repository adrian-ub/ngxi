import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOvenGenIcon],svg[material-symbols-light-oven-gen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.5v6.885q0 .69.463 1.152T5.616 20h12.769q.69 0 1.153-.463T20 18.385V11.5h-4V16H8v-4.5zM9 15h6v-3.5H9zm-5-4.5h16V5.616q0-.691-.462-1.153T18.384 4H5.616q-.691 0-1.153.463T4 5.616zm3.962-2.308q-.31 0-.54-.23t-.23-.539t.23-.54t.54-.23t.539.23t.23.54q0 .31-.23.54t-.54.23m4 0q-.309 0-.539-.23t-.23-.54t.23-.54t.54-.23t.539.23t.23.54t-.23.54t-.54.23m4 0q-.309 0-.539-.23t-.23-.54t.23-.54t.54-.23t.539.23t.23.54t-.23.54t-.54.23"></svg:path>`,
})
export class MaterialSymbolsLightOvenGenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
