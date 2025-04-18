import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEditRoadOutlineRoundedIcon],svg[material-symbols-light-edit-road-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.504 11.25q-.187 0-.345-.125Q16 11 16 10.75V5.5q0-.213.144-.356T16.501 5t.356.144T17 5.5v5.25q0 .25-.155.375t-.341.125M5 18.5v-13q0-.213.144-.356T5.501 5t.356.144T6 5.5v13q0 .213-.144.356T5.499 19t-.356-.144T5 18.5m5.5-10.98V5.5q0-.213.144-.356T11.001 5t.356.144t.143.356v2.02q0 .212-.144.356t-.357.143t-.356-.144t-.143-.356m0 5.481v-2.02q0-.212.144-.355t.357-.144t.356.144t.143.356V13q0 .213-.144.356t-.357.144t-.356-.144T10.5 13m0 5.5v-2.02q0-.212.144-.355t.357-.144t.356.144t.143.356V18.5q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356m4.539.5q-.344 0-.576-.232t-.232-.576V17.12q0-.153.055-.297q.056-.143.187-.274l5.09-5.065q.148-.149.306-.2q.157-.052.315-.052q.172 0 .337.064t.302.193l.925.945q.123.148.187.308q.065.159.065.319t-.061.322t-.191.31l-5.065 5.066q-.131.13-.275.186q-.143.056-.297.056zm6.077-5.94l-.925-.945zm-6 5.056h.95l3.467-3.474l-.47-.475l-.455-.488l-3.492 3.487zm3.948-3.949l-.456-.488l.925.963z"></svg:path>`,
})
export class MaterialSymbolsLightEditRoadOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
