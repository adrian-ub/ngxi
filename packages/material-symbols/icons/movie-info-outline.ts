import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMovieInfoOutlineIcon],svg[material-symbols-movie-info-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm0-2h2v-2H4zm14 0h2v-2h-2zm-7-2h2v-6h-2zm-7-2h2v-2H4zm14 0h2v-2h-2zM4 11h2V9H4zm14 0h2V9h-2zm-6-2q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9M4 7h2V5H4zm14 0h2V5h-2zM8 19h8V5H8zM8 5h8z"></svg:path>`,
})
export class MaterialSymbolsMovieInfoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
