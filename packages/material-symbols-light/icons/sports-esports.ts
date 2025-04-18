import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSportsEsportsIcon],svg[material-symbols-light-sports-esports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.512 18q-.762 0-1.18-.551t-.32-1.23L4.1 8.604q.167-1.132.991-1.868Q5.916 6 7.05 6h9.9q1.135 0 1.959.736t.991 1.868l1.089 7.615q.098.679-.32 1.23t-1.18.551q-.333 0-.6-.101t-.508-.341L15.823 15H8.177l-2.558 2.558q-.24.24-.507.341t-.6.101M17 12.808q.329 0 .568-.24t.24-.568t-.24-.568t-.568-.24t-.568.24t-.24.568t.24.568t.568.24m-2-3q.329 0 .568-.24t.24-.568t-.24-.568t-.568-.24t-.568.24t-.24.568t.24.568t.568.24m-6.942 2.884h.884v-1.75h1.75v-.884h-1.75v-1.75h-.884v1.75h-1.75v.884h1.75z"></svg:path>`,
})
export class MaterialSymbolsLightSportsEsportsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
